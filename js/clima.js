// Reemplaza con tu API Key de OpenWeatherMap
const API_KEY = '50cadb08888d61c5be92f37815982485';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.getElementById('weatherContainer');
const errorMessage = document.getElementById('errorMessage');

// Event Listeners
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// Función principal para buscar el clima
async function searchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Por favor, ingresa el nombre de una ciudad');
        return;
    }

    try {
        showLoading();
        const data = await fetchWeatherData(city);
        displayWeather(data);
        hideError();
    } catch (error) {
        showError(error.message);
        weatherContainer.innerHTML = '';
    }
}

// Fetch datos de la API
async function fetchWeatherData(city) {
    const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=es`;
    
    console.log('Consultando:', url); // Para debug
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        console.log('Respuesta de la API:', data); // Para debug
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Ciudad no encontrada. Verifica el nombre e intenta nuevamente.');
            } else if (response.status === 401) {
                throw new Error(`API Key inválida o inactiva. Código: ${data.cod}. Mensaje: ${data.message || 'Verifica tu API Key en OpenWeatherMap'}`);
            } else if (response.status === 429) {
                throw new Error('Límite de consultas excedido. Espera unos minutos e intenta nuevamente.');
            } else {
                throw new Error(`Error ${response.status}: ${data.message || 'Error al obtener los datos del clima'}`);
            }
        }
        
        return data;
    } catch (error) {
        if (error.message.includes('API Key') || error.message.includes('401')) {
            throw error;
        } else if (error instanceof TypeError) {
            throw new Error('Error de conexión. Verifica tu conexión a Internet.');
        } else {
            throw error;
        }
    }
}

// Mostrar datos del clima
function displayWeather(data) {
    const { name, sys, main, weather, wind } = data;
    
    const weatherIcon = getWeatherIcon(weather[0].main);
    const description = weather[0].description;
    const temp = Math.round(main.temp);
    const feelsLike = Math.round(main.feels_like);
    const humidity = main.humidity;
    const windSpeed = Math.round(wind.speed * 3.6); // Convertir m/s a km/h
    
    weatherContainer.innerHTML = `
        <div class="weather-card">
            <h3>${name}, ${sys.country}</h3>
            <div class="weather-icon">${weatherIcon}</div>
            <div class="temperature">${temp}°C</div>
            <p style="color: #7F8C8D; text-transform: capitalize; font-size: 1.1rem;">
                ${description}
            </p>
            <div class="weather-info">
                <div class="info-item">
                    <div class="info-label">Sensación</div>
                    <div class="info-value">${feelsLike}°C</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Humedad</div>
                    <div class="info-value">${humidity}%</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Viento</div>
                    <div class="info-value">${windSpeed} km/h</div>
                </div>
            </div>
        </div>
    `;
}

// Obtener emoji según el clima
function getWeatherIcon(weatherMain) {
    const icons = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Drizzle': '🌦️',
        'Thunderstorm': '⛈️',
        'Snow': '❄️',
        'Mist': '🌫️',
        'Smoke': '🌫️',
        'Haze': '🌫️',
        'Dust': '🌪️',
        'Fog': '🌫️',
        'Sand': '🌪️',
        'Ash': '🌋',
        'Squall': '💨',
        'Tornado': '🌪️'
    };
    
    return icons[weatherMain] || '🌤️';
}

// Mostrar mensaje de carga
function showLoading() {
    weatherContainer.innerHTML = `
        <div class="weather-card">
            <div style="font-size: 3rem;">⏳</div>
            <p style="color: #7F8C8D; margin-top: 1rem;">Cargando...</p>
        </div>
    `;
}

// Mostrar error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    
    setTimeout(() => {
        hideError();
    }, 5000);
}

// Ocultar error
function hideError() {
    errorMessage.classList.remove('show');
}
