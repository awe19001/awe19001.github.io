const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);


function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}






