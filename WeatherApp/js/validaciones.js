const contactForm = document.getElementById('contactForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const successMessage = document.getElementById('successMessage');

// Event Listeners
contactForm.addEventListener('submit', handleSubmit);

nombreInput.addEventListener('blur', () => validateNombre());
emailInput.addEventListener('blur', () => validateEmail());
mensajeInput.addEventListener('blur', () => validateMensaje());

// Limpiar error al escribir
nombreInput.addEventListener('input', () => clearError('nombre'));
emailInput.addEventListener('input', () => clearError('email'));
mensajeInput.addEventListener('input', () => clearError('mensaje'));

// Manejar envío del formulario
function handleSubmit(e) {
    e.preventDefault();
    
    const isNombreValid = validateNombre();
    const isEmailValid = validateEmail();
    const isMensajeValid = validateMensaje();
    
    if (isNombreValid && isEmailValid && isMensajeValid) {
        showSuccess();
        contactForm.reset();
    }
}

// Validar nombre
function validateNombre() {
    const nombre = nombreInput.value.trim();
    const errorElement = document.getElementById('errorNombre');
    
    if (nombre === '') {
        showError('nombre', 'El nombre es obligatorio');
        return false;
    } else if (nombre.length < 3) {
        showError('nombre', 'El nombre debe tener al menos 3 caracteres');
        return false;
    } else {
        clearError('nombre');
        return true;
    }
}

// Validar email
function validateEmail() {
    const email = emailInput.value.trim();
    const errorElement = document.getElementById('errorEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        showError('email', 'El correo electrónico es obligatorio');
        return false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'Ingresa un correo electrónico válido');
        return false;
    } else {
        clearError('email');
        return true;
    }
}

// Validar mensaje
function validateMensaje() {
    const mensaje = mensajeInput.value.trim();
    const errorElement = document.getElementById('errorMensaje');
    
    if (mensaje === '') {
        showError('mensaje', 'El mensaje es obligatorio');
        return false;
    } else if (mensaje.length < 10) {
        showError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
        return false;
    } else {
        clearError('mensaje');
        return true;
    }
}

// Mostrar error
function showError(field, message) {
    const input = document.getElementById(field);
    const errorElement = document.getElementById(`error${capitalizeFirst(field)}`);
    
    input.classList.add('invalid');
    errorElement.textContent = message;
}

// Limpiar error
function clearError(field) {
    const input = document.getElementById(field);
    const errorElement = document.getElementById(`error${capitalizeFirst(field)}`);
    
    input.classList.remove('invalid');
    errorElement.textContent = '';
}

// Mostrar mensaje de éxito
function showSuccess() {
    successMessage.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Capitalizar primera letra
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
