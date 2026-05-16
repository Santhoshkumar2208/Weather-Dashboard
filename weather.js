const city_n = document.querySelector('.city');
const display = document.querySelector('.display');
const search = document.getElementById('search');
const weather_s = document.querySelector('.weather-symbol img');
const t_value = document.getElementById('t_value');
const h_value = document.getElementById('h_value');
const p_value = document.getElementById('p_value');
const w_value = document.getElementById('w_value');

const iconMap = {
    '01d': 'clear-day',
    '01n': 'clear-night',
    '02d': 'mostly-clear-day',
    '02n': 'mostly-clear-night',
    '03d': 'partly-cloudy-day',
    '03n': 'partly-cloudy-night',
    '04d': 'cloudy',
    '04n': 'cloudy',
    '09d': 'drizzle',
    '09n': 'drizzle',
    '10d': 'rain',
    '10n': 'rain',
    '11d': 'thunderstorms-day',
    '11n': 'thunderstorms-night',
    '13d': 'snow',
    '13n': 'snow',
    '50d': 'haze-day',
    '50n': 'haze-night',
};

async function weather(val){
    const api_key = 'Enter your API KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${api_key}&units=metric`;;
    const data = await fetch(url);
    const res = await data.json();
    display.textContent = res.name.toUpperCase();
    t_value.textContent = res.main.temp.toFixed(1) + ' °C';
    h_value.textContent = Math.round(res.main.humidity) + ' %';
    p_value.textContent = (res.main.pressure) + ' hPa';
    w_value.textContent = res.wind.speed + ' Km/Hr';
    const icon = res.weather[0].icon;
    let meto;
    if (iconMap[icon]) {
        meto = iconMap[icon];
    }
    else {
        meto = 'cloudy';
    }
    weather_s.src = `https://cdn.meteocons.com/3.0.0-next.10/svg/fill/${meto}.svg`;
    const id = res.weather[0].id;
    let bg = 'clear_sun.jpg';
    if (id >= 200 && id < 300){
        bg = 'thunder.jpg';}
    else if (id >= 300 && id < 600){
        bg = 'rain.jpg';}
    else if (id >= 600 && id < 700){
        bg = 'snow.jpg';}
    else if (id >= 700 && id < 800){
        bg = 'fog.jpg';
    }
    else if (id >= 800 && id <=805){
        if(icon.endsWith('d')){
            bg = 'clear_sun.jpg';
        }
        else{
            bg = 'clear_night.jpg';
        }
    }
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = 'cover';
    document.querySelector('.container').style.backgroundImage = `url(${bg})`;
    document.querySelector('.container').style.backgroundSize = 'cover';
    console.log(res);
}
search.addEventListener('click', () => {
    const city = city_n.value;
    weather(city);
});
city_n.value = 'Chennai';
weather('Chennai');
