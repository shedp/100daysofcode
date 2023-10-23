let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById("display");
const startPauseButton = document.getElementById("startPause");
const resetButton = document.getElementById("reset");

function toggleTimer() {
    if (isRunning) {
        isRunning = false;
        startPauseButton.textContent = "Start";
        clearInterval(timer);
        display.classList.remove("running");
    } else {
        isRunning = true;
        startPauseButton.textContent = "Pause";
        timer = setInterval(updateTimer, 1000);
        display.classList.add("running");
    }
}

function resetTimer() {
    isRunning = false;
    startPauseButton.textContent = "Start";
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startPauseButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);

resetTimer(); // Initialize the display