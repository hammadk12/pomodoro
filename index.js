let timer;
let seconds = 0
let minutes = 25
let isPaused = false
let enteredTime = null

function startTimer() {
    // sets timer and runs updateTimer function
    timer = setInterval(updateTimer, 1000)
}

function updateTimer() {
    // grabs timer html element
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds)

    // alerts when timer hits 0
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer)
        alert('Time is up! Take a break.')
    } else if (!isPaused) {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }
    }
}

// takes minutes and seconds, returns in format of MM:SS
function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


function toggleStartPause() {
    // grabs button to switch between start/pause
    const startPauseButton = document.querySelector('.btns button');
    isPaused = !isPaused; // sets isPaused to true

    if (isPaused) { // if timer is paused, interval is stopped and text changes to start
        clearInterval(timer);
        startPauseButton.textContent = 'Start';
    } else { // otherwise timer is not paused, timer goes and text is pause
        startTimer();
        startPauseButton.textContent = 'Pause'
    }
}

function restartTimer() {
    // Clears timer
    clearInterval(timer)
    // sets minutes and seconds to entered time OR 25, sets isPaused to false
    minutes = enteredTime || 25;
    seconds = 0
    isPaused = false
    // grabs timer and formats it to mm:ss
    const timerElement = document.getElementById('timer')
    timerElement.textContent = formatTime(minutes, seconds)
    // grabs btn to change to pause, then starts timer
    const startPauseButton = document.querySelector('.btns button')
    startPauseButton.textContent = 'Start';
    
}

function chooseTime() {
    const newTime = prompt('Enter new time in minutes: ')
    // if new time is a number AND greater than 0, execute function
    if (!isNaN(newTime) && newTime > 0) {
        enteredTime = parseInt(newTime);
        minutes = enteredTime;
        seconds = 0;
        isPaused = false
        // grab timer element, format it and clear previous timer
        const timerElement = document.getElementById('timer')
        timerElement.textContent = formatTime(minutes, seconds);
        clearInterval(timer);
        // grabs button and changes content to pause
        const startPauseButton = document.querySelector('.btns button')
        startPauseButton.textContent = 'Pause'
        startTimer();
        // error handling
    } else {
        alert('Invalid input. Enter a valid number greater than 0.')
    }
}
