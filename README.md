Weather Dashboard

   A weather app built using HTML, CSS, and JavaScript. It uses the OpenWeatherMap API to show temperature, humidity, pressure, and wind speed for any city you search. The background image and weather icon change automatically based on the current weather like rain, snow, fog, or clear sky. No extra tools needed — just open in a browser.

Features

   * Search weather by any city name

   * Shows temperature, humidity, pressure, and wind speed

   * Animated SVG weather icons that match the current condition

   * Background image changes automatically based on weather

   * Defaults to Chennai on load

Setup and Usage

1. Clone the repository

   git clone https://github.com/Santhoshkumar2208/Weather-Dashboard.git
   cd Weather-Dashboard

2. Get a free API key from OpenWeatherMap and replace it in weather.js

   const api_key = 'YOUR_API_KEY_HERE';

3. Open weather.html in any browser — no build step required.

How It Works

   When you search a city, the app calls the OpenWeatherMap API and displays the weather data. The OWM icon code is mapped to an animated Meteocons SVG icon shown on screen. Based on the weather condition ID returned by the API, the background image automatically switches — thunderstorm shows thunder.jpg, rain shows rain.jpg, snow shows snow.jpg, fog shows fog.jpg, and clear weather shows either clear_sun.jpg or clear_night.jpg depending on the time of day.
