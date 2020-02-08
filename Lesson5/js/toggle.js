const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);


function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const d = new Date()
const dayName = days[d.getDay()]
const day = new Date().getDate()


const mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const m = new Date()
const monthName = mlist[m.getMonth()]

const year = new Date().getFullYear()


document.getElementById("lastDate").textContent = `${dayName}, ${day} ${monthName} ${year}`;

$('#donotAnnounce').show();

$('#announcement').show();