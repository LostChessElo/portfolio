import { routes, notFoundRoute } from "./routes.js";

const appEl = document.getElementById("app");
const videoEl = document.getElementById("background-video");
const stillEl = document.getElementById("background-still");
const faviconEl = document.getElementById("favicon");

function getRoute(path) {
  return routes[path] || notFoundRoute;
}

function renderRoute(path) {
  const route = getRoute(path);

  document.title = route.title;
  faviconEl.href = route.favicon;

  // Toggle which background is visible. Both elements already exist in the
  // DOM permanently (see index.html) — this is just a display swap, so it
  // never re-triggers a video load/decode, which is what used to flash.
  if (route.showVideo) {
    videoEl.style.display = "block";
    stillEl.style.display = "none";
  }
  
  appEl.innerHTML = route.html;
  window.scrollTo(0, 0);

  // Let main.js know new content just landed, so it can wire up
  // page-specific behavior (splash text, contact form, etc.)
  document.dispatchEvent(new CustomEvent("route:rendered", { detail: { path } }));
}

export function navigate(path) {
  if (path === window.location.pathname) {
    renderRoute(path); // re-render even if "navigating" to the same path
    return;
  }
  window.history.pushState({}, "", path);
  renderRoute(path);
}

export function initRouter() {
  // Handle browser Back/Forward buttons
  window.addEventListener("popstate", () => {
    renderRoute(window.location.pathname);
  });

  // Render whatever the current URL is on first load
  renderRoute(window.location.pathname);
}
