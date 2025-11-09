# 🌤️ WeatherApp - Aplicación de Consulta Meteorológica

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-orange?style=for-the-badge&logo=openweathermap&logoColor=white)

WeatherApp es una aplicación web moderna y responsive que permite consultar el clima en tiempo real de cualquier ciudad del mundo utilizando la API de OpenWeatherMap.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración de la API](#-configuración-de-la-api)
- [Uso](#-uso)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Responsive Design](#-responsive-design)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Autor](#-autor)

## ✨ Características

- 🔍 **Búsqueda de clima** por nombre de ciudad
- 🌡️ **Información detallada**: temperatura actual, sensación térmica, humedad y velocidad del viento
- 🎨 **Diseño moderno** con gradientes y animaciones suaves
- 📱 **Totalmente responsive** para móviles, tablets y escritorio
- ⚡ **Transiciones animadas** al mostrar resultados
- 🎯 **Iconos dinámicos** según el estado del clima
- 📝 **Formulario de contacto** con validaciones en tiempo real
- 🌐 **Multiidioma**: soporte para español en descripciones del clima
- 🚨 **Manejo de errores** robusto y mensajes informativos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Programación asíncrona con async/await

### API Externa
- **OpenWeatherMap API**: Datos meteorológicos en tiempo real

### Características Técnicas
- Fetch API para consumo de servicios REST
- Validación de formularios en JavaScript
- Responsive Design con Media Queries
- Animaciones CSS3 (keyframes, transitions)
- LocalStorage (preparado para futuras implementaciones)

## 📁 Estructura del Proyecto
- `index.html`: Página principal con el formulario de búsqueda y resultados
- `styles.css`: Estilos globales y para componentes
- `script.js`: Lógica principal de la aplicación
- `README.md`: Documentación del proyecto
- `contacto.html`: Página con el formulario de contacto
- `gracias.html`: Página de agradecimiento tras enviar el formulario

## 💻 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/WeatherApp.git
   ```
2. Navegar a la carpeta del proyecto:
   ```bash
   cd WeatherApp
   ```
3. Abrir el archivo `index.html` en un navegador web.

## 🔑 Configuración de la API

Para que la aplicación funcione, es necesario obtener una clave de API gratuita de OpenWeatherMap:

1. Registrarse en [OpenWeatherMap](https://openweathermap.org/).
2. Ir a la sección de API y crear una nueva clave.
3. Reemplazar `TU_API_KEY` en el archivo `script.js` con la clave obtenida.

## 🚀 Uso

1. Abrir la aplicación en un navegador web.
2. Escribir el nombre de una ciudad en el formulario y presionar "Buscar".
3. Ver los resultados del clima en tiempo real.
4. (Opcional) Enviar un mensaje a través del formulario de contacto.

## ✅ Funcionalidades Implementadas

- [x] Búsqueda de clima por ciudad
- [x] Mostrar temperatura, humedad y viento
- [x] Iconos del clima
- [x] Formulario de contacto
- [x] Mensajes de éxito y error

## 📱 Responsive Design

La aplicación utiliza Media Queries para asegurar que se vea bien en dispositivos de diferentes tamaños. Prueba la aplicación en:

- Móviles
- Tablets
- Escritorio

## 📸 Capturas de Pantalla

### Pantalla Principal
![Pantalla Principal](https://via.placeholder.com/600x400?text=Pantalla+Principal)

### Resultados de Clima
![Resultados de Clima](https://via.placeholder.com/600x400?text=Resultados+de+Clima)

### Formulario de Contacto
![Formulario de Contacto](https://via.placeholder.com/600x400?text=Formulario+de+Contacto)

## 👤 Autor

Desarrollado por [Tu Nombre](https://github.com/tuusuario) - [tuemail@example.com](mailto:tuemail@example.com)

¡Gracias por probar WeatherApp!

