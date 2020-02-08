  
    let today = new Date().getDay()
    if (today == Friday) {
        document.getElementById("getNotice").style.display = "block";
    } else {
        document.getElementById("getNotice").style.display = "none";
    };