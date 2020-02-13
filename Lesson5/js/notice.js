let options = {
  day: "numeric",
  month: "numeric",
  year: "numeric"
};
let lastDate = new Date();
let day = lastDate.getDay();
let month = lastDate.getMonth();
let year = lastDate.getFullYear();
let dayMonth = lastDate.getDate()
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

let months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August",
  "September", 
  "October", 
  "November", 
  "December"
]

let actualDate = days[day] + ", " + dayMonth + " " + months[month] + " " + year;
document.getElementById('lastDate').textContent = actualDate;

if (day == 5) {
  document.getElementsByClassName("getNotice")[0].style.display = "block";
} else {
  document.getElementsByClassName("getNotice")[0].style.display = "none";
}
}