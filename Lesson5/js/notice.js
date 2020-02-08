function showThis() {
    let today = new Date().getDay()
    if (today == 5) {
        document.getElementById("getNotice").style.display = "block";
    } else {
        document.getElementById("getNotice").style.display = "none";
    }
}