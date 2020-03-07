const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        //console.Log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        console.table(jsonObject);
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let image = document.createElement('img');
            let year = document.createElement('h3');
            let population = document.createElement('h3');
            let rainfall = document.createElement('h3');
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
   
            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Rainfall: " + towns[i].averageRainfall;
            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt',  + ' ' + towns[i].lastname + ' - ' + towns[i].order)

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(rainfall);
            card.appendChild(div2);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }});