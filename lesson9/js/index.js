const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Fish Haven" || 
        towns[i].name == "Preston" || 
        towns[i].name == "Soda Springs") {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('div');
            let yearFounded = document.createElement('div');
            let currentPopulation = document.createElement('div');
            let averageRainfall = document.createElement('div');
            let info = document.createElement('div');
            let sectioninfo = document.createElement('div');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            motto.setAttribute('class', 'motto');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            yearFounded.setAttribute('class', 'towninfo');
            currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
            currentPopulation.setAttribute('class', 'towninfo');
            averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            averageRainfall.setAttribute('class', 'towninfo');
            image.setAttribute('src', 'images/'+ towns[i].photo);
            image.setAttribute('alt', 'Photo of ' + towns[i].name);
            sectioninfo.setAttribute('class', 'town-info-with-image')
          
            
            info.appendChild(yearFounded);
            info.appendChild(currentPopulation);
            info.appendChild(averageRainfall);
            
            sectioninfo.appendChild(info);
            sectioninfo.appendChild(image);

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(sectioninfo);

            document.querySelector('div.cards').appendChild(card);
        } 
    }
  });

  