const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        //console.Log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
        console.table(jsonObject);
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
   
            h2.textContent = towns[i].name + ' ' + towns[i].lastname;

            div1.textContent = 'Date of Birth: ' + towns[i].birthdate;
            div2.textContent = 'Place of Birth: ' + towns[i].birthplace;
            image.setAttribute('src', towns[i].imageurl);
            image.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + ' - ' + towns[i].order)

            card.appendChild(h2);
            card.appendChild(div1);
            card.appendChild(div2);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }});