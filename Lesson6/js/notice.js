let lastModif = document.lastModified;
document.getElementById('currentdate').innerHTML = lastModif;

function Menu() {
    document.getElementById("menu").classList.toggle("hide")
}

let d = new Date();
let week = d.getDay();
if(week !== 5) {
    document.getElementById("getNotice").style.display = "none";
}