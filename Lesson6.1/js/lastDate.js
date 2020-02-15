const adlaw = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const d = new Date()
const dayName = adlaw[d.getDay()]
const karon = new Date().getDate()


const buwan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const m = new Date()
const monthName = buwan[m.getMonth()]

const tuig = new Date().getFullYear()


document.getElementById("lastDate").textContent = `${dayName}, ${karon} ${monthName} ${tuig}`;
