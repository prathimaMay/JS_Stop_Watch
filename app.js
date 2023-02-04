//Variables for buttons

const startStpBtn = document.querySelector("#start-stop-btn");
const resetBtn = document.querySelector("#reset-btn");

//Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for leading zeroes

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variables for setInterval and timerStatus
let timerStatus = "stopped";
let timerInterval = null;

//Stop watch function

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

startStpBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "start-stop-btn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "start-stop-btn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  timerStatus = "stopped";
  document.getElementById(
    "start-stop-btn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
});
