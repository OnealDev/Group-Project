// MUSIC BUTTON
let music = new Audio("music.mp3");
music.loop = true;

document.getElementById("musicBtn").addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
