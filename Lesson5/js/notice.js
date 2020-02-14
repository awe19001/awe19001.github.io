// let options = {
//   day: "numeric",
//   month: "numeric",
//   year: "numeric"
// };

// let month = lastDate.getMonth();
// let year = lastDate.getFullYear();
// let dayMonth = lastDate.getDate()
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ]

// let months = [
//   "January", 
//   "February", 
//   "March", 
//   "April", 
//   "May", 
//   "June", 
//   "July", 
//   "August",
//   "September", 
//   "October", 
//   "November", 
//   "December"
// ]

// let actualDate = days[day] + ", " + dayMonth + " " + months[month] + " " + year;
// document.getElementById('lastDate').textContent = actualDate;


let lastDate = new Date();
let day = lastDate.getDay();
if (day == 4) {
  document.getElementById("getNotice").style.display = "block";
} else {
  document.getElementById("getNotice").style.display = "none";
}
