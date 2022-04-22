console.log(`weather.js is linked into index.html!`);

const url = 'http://api.weatherapi.com/v1/current.json?key=b4da08ea83cd4e3791000620222204&q=93065&aqi=no' // URL leads to API end-point for Simi Valley weather from weatherapi.com

fetch(url) // We have a working fetch request!
.then(response => response.json())
.then(data => console.log(data));