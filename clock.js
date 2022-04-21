console.log(`clock.js is linked into index.html!`);

var showCurrentTime = function()
{
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1;
    var fullYear = currentTime.getFullYear();
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    var seconds = currentTime.getSeconds();
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + month + "/" + day + "/" + fullYear;
    clock.innerText = clockTime;
}

var start = new Date();

setInterval(function () {
    showCurrentTime((new Date() - start) % 1000)
}, 1000);

document.onload = showCurrentTime();
