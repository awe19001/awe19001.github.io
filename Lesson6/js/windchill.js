function getWindChill()
{
    var temp = parseFloat(document.getElementById('temp').innerHTML);
    var windspeed = parseFloat(document.getElementById('windspeed').innerHTML);
    var windchill = document.getElementById('windchill');

    if (temp > 50 || windspeed < 3) {
        windchill.innerHTML = "N/A";
    }else{
        calculateWindchill(temp,windspeed);
    }
}

function calculateWindchill(temp,windspeed)
{
    var result = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 * temp * Math.pow(windspeed,0.16));
    windchill.innerHTML = parseFloat(result.toFixed(2));
}
