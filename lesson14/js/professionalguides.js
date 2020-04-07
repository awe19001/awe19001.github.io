const requestURL = 'https://awe19001.github.io/lesson13/professionalguide.json';
fetch(requestURL)
    .then(function (response) {
        //console.Log(response);
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const professional = jsonObject['professional'];
        console.table(jsonObject);
        for (let i = 0; i < professional.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            let div3 = document.createElement('div');
            let div4 = document.createElement('div');
              
            h2.textContent = professional[i].name;

            div1.textContent = 'Certification Level: ' + professional[i].level;
            div2.textContent = 'Number of Years: ' + professional[i].years;
            div3.textContent = 'Email Address: ' + professional[i].email;
            div4.textContent = 'Biography: ' + professional[i].bio;
            image.setAttribute('src', professional[i].imageurl);
            image.setAttribute('alt', professional[i].name)

            card.appendChild(h2);
            card.appendChild(div1);
            card.appendChild(div2);
            card.appendChild(div3);
 
            card.appendChild(image);

            card.appendChild(div4);

            document.querySelector('div.cards').appendChild(card);
        }});