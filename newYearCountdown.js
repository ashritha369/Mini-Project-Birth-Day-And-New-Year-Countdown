const mainDurationTime = document.getElementById("main-duration-time");
const subDuration = document.getElementById("sub-duration");
const colon = document.getElementById("colon");
const days1stDigit = document.getElementById("days-1st-digit");
const days2ndDigit = document.getElementById("days-2nd-digit");
const days3rdDigit = document.getElementById("days-3rd-digit");
const hours1stDigit = document.getElementById("hours-1st-digit");
const hours2ndDigit = document.getElementById("hours-2nd-digit");
const minutes1stDigit = document.getElementById("minutes-1st-digit");
const minutes2ndDigit = document.getElementById("minutes-2nd-digit");
const seconds1stDigit = document.getElementById("seconds-1st-digit");
const seconds2ndDigit = document.getElementById("seconds-2nd-digit");
const year = document.getElementById("year");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;
//-2
function updateCountdown() {
  const currentTimeAndDate = new Date();
  const difference = newYearTime - currentTimeAndDate;

  const DAYS = Math.floor(difference / 1000 / 60 / 60 / 24);
  const HOURS = Math.floor(difference / 1000 / 60 / 60) % 24;
  const MINUTES = Math.floor(difference / 1000 / 60) % 60;
  const SECONDS = Math.floor(difference / 1000) % 60;

  //DAYS
  if (DAYS < 100) {
    days1stDigit.innerHTML = "0";
    days2ndDigit.innerHTML = String(DAYS).split("")[0];
    days3rdDigit.innerHTML = String(DAYS).split("")[1];
  } else if (DAYS > 100) {
    days1stDigit.innerHTML = String(DAYS).split("")[0];
    days2ndDigit.innerHTML = String(DAYS).split("")[1];
    days3rdDigit.innerHTML = String(DAYS).split("")[2];
  } else {
    // DAYS<10
    days1stDigit.innerHTML = "0";
    days1stDigit.innerHTML = "0";
    days3rdDigit.innerHTML = DAYS;
  }
  // HOURS
  if (HOURS < 10) {
    hours1stDigit.innerHTML = "0";
    hours2ndDigit.innerHTML = HOURS;
  } else {
    hours1stDigit.innerHTML = String(HOURS).split("")[0];
    hours2ndDigit.innerHTML = String(HOURS).split("")[1];
  }
  // MINUTES
  if (MINUTES < 10) {
    minutes1stDigit.innerHTML = "0";
    minutes2ndDigit.innerHTML = MINUTES;
  } else {
    minutes1stDigit.innerHTML = String(MINUTES).split("")[0];
    minutes2ndDigit.innerHTML = String(MINUTES).split("")[1];
  }
  // SECONDS
  if (SECONDS < 10) {
    seconds1stDigit.innerHTML = "0";
    seconds2ndDigit.innerHTML = SECONDS;
  } else {
    seconds1stDigit.innerHTML = String(SECONDS).split("")[0];
    seconds2ndDigit.innerHTML = String(SECONDS).split("")[1];
  }
}
// updateCountdown();
// -1
setInterval(updateCountdown, 1000);
