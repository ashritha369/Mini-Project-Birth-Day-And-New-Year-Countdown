const birthMainDurationTime = document.getElementById("main-duration-time");
const birthSubDuration = document.getElementById("birth-sub-duration");
const coloN = document.getElementById("colon");
const birthDays1stDigit = document.getElementById("birth-days-1st-digit");
const birthDays2ndDigit = document.getElementById("birth-days-2nd-digit");
const birthDays3rdDigit = document.getElementById("birth-days-3rd-digit");
const birthHours1stDigit = document.getElementById("birth-hours-1st-digit");
const birthHours2ndDigit = document.getElementById("birth-hours-2nd-digit");
const birthMinutes1stDigit = document.getElementById("birth-minutes-1st-digit");
const birthMinutes2ndDigit = document.getElementById("birth-minutes-2nd-digit");
const birthSeconds1stDigit = document.getElementById("birth-seconds-1st-digit");
const birthSeconds2ndDigit = document.getElementById("birth-seconds-2nd-digit");

const birthCurrentYear = new Date().getFullYear();

const birthNewYearTime = new Date(`March 20 ${currentYear + 1} 00:00:00`);

function updateBirthdayCountdown() {
  const birthCurrentTimeAndDate = new Date();
  const birthDifference = birthNewYearTime - birthCurrentTimeAndDate;

  const birthDAYS = Math.floor(birthDifference / 1000 / 60 / 60 / 24);
  const birthHOURS = Math.floor(birthDifference / 1000 / 60 / 60) % 24;
  const birthMINUTES = Math.floor(birthDifference / 1000 / 60) % 60;
  const birthSECONDS = Math.floor(birthDifference / 1000) % 60;

  //DAYS
  if (birthDAYS < 10) {
    birthDays1stDigit.innerHTML = "0";
    birthDays2ndDigit.innerHTML = "0";
    birthDays3rdDigit.innerHTML = birthDAYS;
  } else if (birthDAYS > 100) {
    birthDays1stDigit.innerHTML = String(birthDAYS).split("")[0];
    birthDays2ndDigit.innerHTML = String(birthDAYS).split("")[1];
    birthDays3rdDigit.innerHTML = String(birthDAYS).split("")[2];
  } else {
    // DAYS<100
    birthDays1stDigit.innerHTML = "0";
    birthDays2ndDigit.innerHTML = String(birthDAYS).split("")[0];
    birthDays3rdDigit.innerHTML = String(birthDAYS).split("")[1];
  }
  // HOURS
  if (birthHOURS < 10) {
    birthHours1stDigit.innerHTML = "0";
    birthHours2ndDigit.innerHTML = birthHOURS;
  } else {
    birthHours1stDigit.innerHTML = String(birthHOURS).split("")[0];
    birthHours2ndDigit.innerHTML = String(birthHOURS).split("")[1];
  }
  // MINUTES
  if (birthMINUTES < 10) {
    birthMinutes1stDigit.innerHTML = "0";
    birthMinutes2ndDigit.innerHTML = birthMINUTES;
  } else {
    birthMinutes1stDigit.innerHTML = String(birthMINUTES).split("")[0];
    birthMinutes2ndDigit.innerHTML = String(birthMINUTES).split("")[1];
  }
  // SECONDS
  if (birthSECONDS < 10) {
    birthSeconds1stDigit.innerHTML = "0";
    birthSeconds2ndDigit.innerHTML = birthSECONDS;
  } else {
    birthSeconds1stDigit.innerHTML = String(birthSECONDS).split("")[0];
    birthSeconds2ndDigit.innerHTML = String(birthSECONDS).split("")[1];
  }
}

// -1
setInterval(updateBirthdayCountdown, 1000);
