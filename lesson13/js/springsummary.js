const apiURL='HTTPS://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=cc212cbbd0ff298fb3b28b06c3097120';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(0);

    const high = jsObject.main.temp;
    const windspeed = jsObject.wind.speed;
   
  });





