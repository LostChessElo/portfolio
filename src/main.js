import { initRouter, navigate } from "./router.js";

// ===== Splash text (only relevant on the home route) =====
const SPLASHES = ["Hello World!", "Works on my machine.", "git commit -m...."];

function setSplash() {
  const el = document.getElementById("splash");
  if (!el) return; // not on this route, nothing to do

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

// ===== Contact form (only relevant on the contact route) =====
// Submits via fetch instead of a full page POST, so it never leaves the
// SPA at all — no reload, no flash, no redirect round-trip through Formspree.
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return; // not on this route, nothing to do

  const statusEl = document.getElementById("contact-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    statusEl.hidden = false;
    statusEl.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        statusEl.textContent = "Message sent — thanks! I'll get back to you soon.";
        form.reset();
      } else {
        statusEl.textContent = "Something went wrong — please try again, or email me directly.";
      }
    } catch (err) {
      statusEl.textContent = "Something went wrong — please try again, or email me directly.";
    }
  });
}

// ===== Click sound + navigation, for every button-style link on the site =====
const clickSound = document.getElementById("minecraft-click");

function initClickSounds() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a.btn-wrap, a.icon-btn, a.world-entry");
    if (!link) return;

    event.preventDefault();

    clickSound.currentTime = 0;
    clickSound.play();

    const href = link.getAttribute("href");
    const opensNewTab = link.target === "_blank";

    setTimeout(() => {
      if (opensNewTab) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else if (href.startsWith("/")) {
        navigate(href); // client-side, no reload
      } else {
        window.location.href = href;
      }
    }, 80);
  });
}

// ===== Wire everything up =====
document.addEventListener("DOMContentLoaded", () => {
  initClickSounds();
  initRouter();
});

// Every time the router swaps in new content, re-run whichever
// page-specific setup actually applies to that content.
document.addEventListener("route:rendered", () => {
  setSplash();
  initContactForm();
});
