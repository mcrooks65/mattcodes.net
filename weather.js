// Improvements to be made to this script:
// 1) Add more information for current weather conditions.  Wind would be useful since that seems to be a problem here in Simi Valley.
// 2) 3-Day Forecast information is available, let's make use of it.  
// 3) Allow user to enter their zipcode to fetch their own local weather.

const forecastWeatherApiUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b4da08ea83cd4e3791000620222204&q=93065&days=3&aqi=no&alerts=no' // URL leads to API end-point for Simi Valley weather from weatherapi.com

var showWeather = function ()
{
    fetch(forecastWeatherApiUrl)
        .then(response => response.json())
        .then(data => {
        console.log(data) // All weather data is being sent to the Console.
        let currentTempF = data.current.temp_f
        let currentTempC = data.current.temp_c
        let currentLoc = data.location.name
        let currentCondition = data.current.condition.text
        let currentWeather = document.getElementById("currentWeather");
        currentWeather.innerText = `It's currently ${currentTempF}\xB0 Fahrenheit / ${currentTempC}\xB0 Celcius in ${currentLoc}.  Condition is ${currentCondition}.`
        let windMPH = data.current.wind_mph
        let gustMPH = data.current.gust_mph
        let windDir = data.current.wind_dir
        let windStatus = document.getElementById("windStatus")
        windStatus.innerText = `The wind is heading ${windDir} w/ speed varying from ${windMPH} to ${gustMPH} MPH.`
    });
}

setInterval(function () {
    showWeather();
}, 900000); // 15 minute refresh for weather info.

document.onload = showWeather();