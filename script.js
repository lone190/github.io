// Music control
const playPauseButton = document.getElementById("playPause");
const music = document.getElementById("bg-music");

let isPlaying = false;

playPauseButton.addEventListener("click", function() {
    if (isPlaying) {
        music.pause();
        playPauseButton.textContent = "Play";
    } else {
        music.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

// Drop-in animation for "Are you ready?" text
window.onload = function() {
    const readyText = document.getElementById("readyText");
    readyText.style.animation = "dropIn 1s forwards";
};
