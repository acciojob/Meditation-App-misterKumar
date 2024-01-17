//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const meditationVideo = document.getElementById('meditationVideo');
  const meditationAudio = document.getElementById('meditationAudio');
  const audioSource = document.getElementById('audioSource');
  const timeDisplay = document.querySelector('.time-display');
  const playButton = document.querySelector('.play');
  let timer;

  function changeSound(soundFile) {
    audioSource.src = `Sounds/${soundFile}`;
    meditationAudio.load();
    if (meditationAudio.paused) {
      meditationAudio.play();
    }
  }

  function setMeditationTime(minutes) {
    const seconds = minutes * 60;
    updateDisplay(seconds);
    clearInterval(timer);
    timer = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        updateDisplay(seconds);
      } else {
        clearInterval(timer);
        meditationAudio.pause();
        meditationVideo.pause();
        playButton.textContent = 'Play';
      }
    }, 1000);
  }

  function updateDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    timeDisplay.textContent = display;
  }

  function togglePlayPause() {
    if (meditationAudio.paused) {
      meditationAudio.play();
      meditationVideo.play();
      playButton.textContent = 'Pause';
    } else {
      meditationAudio.pause();
      meditationVideo.pause();
      playButton.textContent = 'Play';
    }
  }

  // Initial setup with default values
  changeSound('beach.mp3');
  setMeditationTime(10);
});

  