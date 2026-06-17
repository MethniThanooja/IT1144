let time = 25 * 60; // 25 minutes in seconds
let timerInterval = null;  //pause
let isRunning = false;		//prevent timer running twice at once

const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.querySelector(".start");  //select element with css
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

// Format time as MM:SS
function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timeDisplay.textContent =
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;//0=>05  =>$use to insert variable into strings
}

// Start Timer
startBtn.addEventListener("click", () => {
  if (isRunning) return;

  isRunning = true;
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
    }
  }, 1000);
});

// Pause Timer
pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
});

// Reset Timer
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  time = 25 * 60; // reset to 25 minutes
  isRunning = false;
  updateDisplay();
});

// Initialize display
updateDisplay();
