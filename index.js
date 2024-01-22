let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agus", "Sep", "Nov", "Dec"];
let d= new Date();
let theMonth = d.getMonth();
let currentMonth = monthNames[theMonth]
console.log("Month =", currentMonth);
document.querySelector("#month").textContent = currentMonth;

let date = new Date();
let currentDate = date.getDate();
console.log("Date =", currentDate);
document.querySelector("#date").textContent = currentDate;

let y = new Date();
let theYear = y.getFullYear();
console.log("Year =", theYear);
document.querySelector("#year").textContent = theYear;

let time = new Date();
let currentTime = time.getHours();
console.log("Hours =", currentTime);
document.querySelector("#hours").textContent = currentTime

let minutes = new Date();
let currentMin = minutes.getMinutes();
console.log("Min =", currentMin);
document.querySelector("#min").textContent = currentMin;