const SPLASHES = ["Hello World!", "Works on my machine.", "git commit -m...."];

function setSplash() {
    const el = document.getElementById("splash");
    if (!el) return;

    const text = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
    el.textContent = text;

    const len = text.length;
    const shortLen = 10;
    const longLen = 25;

    const rawT = (len - shortLen) / (longLen - shortLen);
    const t = Math.min(1, Math.max(0, rawT));

    const angle = lerp(-25, -4, t);
    const yOffset = lerp(-10, 20, t);
    const xOffset = lerp(0, -15, t);

    el.style.setProperty("--splash-angle", angle + "deg");
    el.style.setProperty("--splash-y", yOffset + "px");
    el.style.setProperty("--splash-x", xOffset + "px");
}

function lerp(from, to, t) {
    return from + t * (to - from);
}

const clickSound = new Audio("/assets/minecraft_click.ogg");
clickSound.preload = "auto";

document.addEventListener("DOMContentLoaded", () => {
    setSplash();

    document.querySelectorAll(".btn-wrap").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            clickSound.currentTime = 0;
            clickSound.play();

            setTimeout(() => {
                if (button.target === "_blank") {
                    window.open(button.href, "_blank", "noopener,noreferrer");
                } else {
                    window.location.href = button.href;
                }
            }, 80);
        });
    });
});