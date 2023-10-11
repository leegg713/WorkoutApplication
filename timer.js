let timer; // Variable to hold the interval timer
let isRunning = false; // Flag to track if the stopwatch is running
let tenths = 0;
let seconds = 0;
let minutes = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(updateDisplay, 100);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    tenths = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('display').textContent = '00:00.0';
    document.getElementById('startStop').textContent = 'Start';
}

function updateDisplay() {
    tenths++;
    if (tenths == 10) {
        tenths = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    const display = `${pad(minutes)}:${pad(seconds)}.${tenths}`;
    document.getElementById('display').textContent = display;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}
