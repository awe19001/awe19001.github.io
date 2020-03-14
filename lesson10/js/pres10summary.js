const apiURL='http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=cc212cbbd0ff298fb3b28b06c3097120';
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





/*const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function capitalizeFLetter(str) {
    if (str.includes(' ')) {
        let firstWord = str.split(' ')[0]
        let secondWord = str.split(' ')[1]
        return firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + " " + secondWord
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=cc212cbbd0ff298fb3b28b06c3097120';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = jsObject.weather[0].main
    document.getElementById('high').textContent = jsObject.main.temp_max
    document.getElementById('humidity').textContent = jsObject.main.humidity
    document.getElementById('windspeed').textContent = jsObject.wind.speed
    document.getElementById('currently').textContent = capitalizeFLetter(jsObject.weather[0].description)
});

const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=cc212cbbd0ff298fb3b28b06c3097120';
fetch(forecastUrl)
    .then(response => response.json())
    .then(jsObject => {
        const fiveforecast = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'))
        const rows = document.querySelectorAll('.row a span')
        const icons = document.querySelectorAll('.row img')
        const days = document.querySelectorAll('th')

        for (let i = 0; i < rows.length; i++) {
            const date = new Date(fiveforecast[i].dt_txt)
            const day = weekdays[date.getDay()]
            rows[i].textContent = Math.round(forecasts[i].main.temp)
            icons[i].setAttribute('src', `https://openweathermap.org/img/wn/${forecasts[i].weather[0].icon}@2x.png`)
            icons[i].setAttribute('alt', forecasts[i].weather[0].description)
            days[i].textContent = day
        }
    })
*/

