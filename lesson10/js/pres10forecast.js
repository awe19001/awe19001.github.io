const forecastURL=`http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=cc212cbbd0ff298fb3b28b06c3097120`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (let i = 0; i < 5; i++ ) {
        let divDay = document.createElement('div');
        let spanDay = document.createElement('span');
        let image = document.createElement('img');
        let spanTemp = document.createElement('span');

        const temp = forecast[i].main.temp.toFixed(0);
        const dayString = forecast[i].dt_txt;
        const dayOfWeek = new Date(dayString).getDay();
        const dayName = dayNames[dayOfWeek];
        const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[i].weather[0].icon + '@2x.png';
        const desc = forecast[i].weather[0].description;

        divDay.setAttribute('class', 'col');
        spanDay.setAttribute('class', 'dayPangan');
        spanDay.textContent = dayName;
        image.setAttribute('src', imagesrc);
        image.setAttribute('alt', desc);
        spanTemp.setAttribute('class', 'dataTemp');
        spanTemp.innerHTML = temp + '&deg; F';
               
        divDay.appendChild(spanDay);
        divDay.appendChild(image);
        divDay.appendChild(spanTemp);
        
        document.getElementById('limaKaAdlaw').appendChild(divDay);
    } 

  });