function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("hide");
    let menuText = document.getElementsByClassName("menNav")[0]
    if (menuText.innerHTML == "☰ Menu") {
        menuText.innerHTML = "X";
    } else {
        menuText.innerHTML = "&#9776; Menu";
    }
}






