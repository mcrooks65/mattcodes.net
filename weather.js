console.log(`weather.js is linked into index.html!`);

const forecastWeatherApiUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b4da08ea83cd4e3791000620222204&q=93065&days=3&aqi=no&alerts=no' // URL leads to API end-point for Simi Valley weather from weatherapi.com


var showWeather = function ()
{
    fetch(forecastWeatherApiUrl) // We have a working fetch request!
        .then(response => response.json())
        .then(data => {
        console.log(data)
        let currentTempF = data.current.temp_f
        let currentTempC = data.current.temp_c
        let currentLoc = data.location.name
        let currentCondition = data.current.condition.text
        var currentWeather = document.getElementById("weather");
        currentWeather.innerText = `It's currently ${currentTempF}\xB0 Fahrenheit / ${currentTempC}\xB0 Celcius in ${currentLoc}.  Condition is ${currentCondition}.`
    });
}

document.onload = showWeather();