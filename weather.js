// Improvements to be made to this script:
// 1) Add more information for current weather conditions.  Wind would be useful since that seems to be a problem here in Simi Valley.  (DONE)
// 2) 3-Day Forecast information is available, let's make use of it.  (DONE)
// 3) Allow user to enter their zipcode to fetch their own local weather.
// IMPORTANT SECURITY NOTICE - API KEYS SHOULD NOT STORED IN THE FRONT END.  THIS IS HIGHLY ABUSABLE VULNERABILITY.  OR WOULD BE IF THIS WASNT A FREE API WITH LIMITED REQUESTS.  NEED TO IMPLEMENT A SOLUTION: https://www.youtube.com/watch?v=uk9pviyvrtg - We will try this solution using NodeJS and dotenv Environment Variables soon.

const forecastWeatherApiUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b4da08ea83cd4e3791000620222204&q=93065&days=3&aqi=no&alerts=no' // URL leads to API end-point for Simi Valley weather from weatherapi.com SEE SECURITY NOTICE ABOVE REGARDING THIS LINE

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
        currentWeather.innerText = `It's currently ${currentTempF}\xB0F / ${currentTempC}\xB0C in ${currentLoc}.  Condition is ${currentCondition}.`
        let windMPH = data.current.wind_mph
        let gustMPH = data.current.gust_mph
        let windDir = data.current.wind_dir
        let windStatus = document.getElementById("windStatus")
        windStatus.innerText = `The wind is heading ${windDir} with speeds varying from ${windMPH} to ${gustMPH} MPH.`

        let forecastData1 = data.forecast.forecastday[0] 
        let forecastDay1Name = getDayFromDate(forecastData1.date) 
        let forecastDay1 = forecastData1.day
        let day1AverageTempF = forecastDay1.avgtemp_f
        let day1AverageTempC = forecastDay1.avgtemp_c
        let day1Condition = forecastDay1.condition.text
        let day1LowTempF = forecastDay1.mintemp_f
        let day1LowTempC = forecastDay1.mintemp_c
        let day1HighTempF = forecastDay1.maxtemp_f
        let day1HighTempC = forecastDay1.maxtemp_c

        let forecastWeather1 = document.getElementById("forecastWeather1");
        forecastWeather1.innerText = `Today, ${forecastDay1Name}, the forecast looks ${day1Condition}.  Expect average temperatures to be ${day1AverageTempF}\xB0F / ${day1AverageTempC}\xB0C with a high of ${day1HighTempF}\xB0F / ${day1HighTempC}\xB0C and low of ${day1LowTempF}\xB0F / ${day1LowTempC}\xB0C`

        let forecastData2 = data.forecast.forecastday[1]
        let forecastDay2Name = getDayFromDate(forecastData2.date) 
        let forecastDay2 = forecastData2.day
        let day2AverageTempC = forecastDay2.avgtemp_c
        let day2AverageTempF = forecastDay2.avgtemp_f
        let day2Condition = forecastDay2.condition.text
        let day2LowTempF = forecastDay2.mintemp_f
        let day2LowTempC = forecastDay2.mintemp_c
        let day2HighTempF = forecastDay2.maxtemp_f
        let day2HighTempC = forecastDay2.maxtemp_c
        let forecastWeather2 = document.getElementById("forecastWeather2");
        forecastWeather2.innerText = `For ${forecastDay2Name} the forecast looks ${day2Condition}.  Expect average temperatures to be ${day2AverageTempF}\xB0F / ${day2AverageTempC}\xB0C with a high of ${day2HighTempF}\xB0F / ${day2HighTempC}\xB0C and low of ${day2LowTempF}\xB0F / ${day2LowTempC}\xB0C`

        let forecastData3 = data.forecast.forecastday[2]
        let forecastDay3Name = getDayFromDate(forecastData3.date) 
        let forecastDay3 = forecastData3.day
        let day3AverageTempC = forecastDay3.avgtemp_c
        let day3AverageTempF = forecastDay3.avgtemp_f
        let day3Condition = forecastDay3.condition.text
        let day3LowTempF = forecastDay3.mintemp_f
        let day3LowTempC = forecastDay3.mintemp_c
        let day3HighTempF = forecastDay3.maxtemp_f
        let day3HighTempC = forecastDay3.maxtemp_c
        let forecastWeather3 = document.getElementById("forecastWeather3");
        forecastWeather3.innerText = `On ${forecastDay3Name} the forecast looks ${day3Condition}.  Expect average temperatures to be ${day3AverageTempF}\xB0F / ${day3AverageTempC}\xB0C with a high of ${day3HighTempF}\xB0F / ${day3HighTempC}\xB0C and low of ${day3LowTempF}\xB0F / ${day3LowTempC}\xB0C`
    });
}

function getDayFromDate(datestring) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    var d = new Date(datestring);
    var dayName = days[d.getDay()];
    return dayName
}

setInterval(function () {
    showWeather();
}, 900000); // 15 minute refresh for weather info.

document.onload = showWeather();