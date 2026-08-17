const clickSound = document.getElementById("minecraft-click");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}