function getNotice(){
    const date = new Date();
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 5)
    {
      document.querySelector(".getNotice").classList.toggle("show");
    }
  }