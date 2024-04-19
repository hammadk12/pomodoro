let timer;
let minutes = 25
let seconds = 0
let isPaused = false
let enteredTime = null

function startTimer() {
    timer = setInterval(updateTimer, 1000)
}

function updateTimer() {
   const timerElement = document.getElementById('timer')
   timerElement.textContent = formatTime(minutes, seconds)

   if (minutes === 0 && seconds === 0) {
    clearInterval(timer)
    alert('Timer is up. Take a break.')
   } else if (!isPaused) {
    if (seconds > 0) {
        seconds--
    } else {
        seconds = 59
        minutes--
    }
   }
}

// takes minutes and seconds, returns in format of MM:SS
function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; 
}

function toggleStartPause() {
    const startPauseButton = document.querySelector('.btns button')
    isPaused = !isPaused

    if (isPaused) {
        clearInterval(timer)
        startPauseButton.textContent = 'Start'
    } else {
        startTimer()
        startPauseButton.textContent = 'Pause'        
    }
}

function restartTimer() {
    minutes = enteredTime || 25
    seconds = 0
    isPaused = true
    clearInterval(timer)
    const timerElement = document.getElementById('timer')
    timerElement.textContent = formatTime(minutes, seconds)
    const startPauseButton = document.querySelector('.btns button')
    startPauseButton.textContent = 'Start'
}

function chooseTime() {
    const newTime = prompt('Enter time in minutes: ')
    if (!isNaN(newTime) && newTime > 0) {
        enteredTime = parseInt(newTime)
        minutes = enteredTime
        seconds = 0
        clearInterval(timer)
        const timerElement = document.getElementById('timer')
        timerElement.textContent = formatTime(minutes, seconds)
        const startPauseButton = document.querySelector('.btns button')
        startPauseButton.textContent = 'Start'
    } else {
        alert('Enter number greater than 0.')
    }
}    
