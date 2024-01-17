//your JS code here. If required.
const video = document.getElementById('video');
const audio = document.getElementById('audio');
const timeDisplay = document.querySelector('.time-display');

let countdown;
let isPlaying = false;

function playPause() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        document.querySelector('.play').textContent = 'Pause';
    } else {
        audio.pause();
        isPlaying = false;
        document.querySelector('.play').textContent = 'Play';
    }
}

function changeSound(sound) {
    audio.src = `sounds/${sound}.mp3`;
    video.src = `videos/${sound}.mp4`;
    playPause();
}

function setTime(seconds) {
    clearInterval(countdown);
    let timer = seconds;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        timer--;
        if (timer < 0) {
            clearInterval(countdown);
            isPlaying = false;
            document.querySelector('.play').textContent = 'Play';
            return;
        }
        displayTimeLeft(timer);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    if (remainderSeconds < 10) {
        remainderSeconds = '0' + remainderSeconds;
    }
    timeDisplay.textContent = `${minutes}:${remainderSeconds}`;
}