// Keep the navigation visible if JavaScript is turned off.
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("site-nav");
const mobileLayout = window.matchMedia("(max-width: 48rem)");

function setMenuOpen(open) {
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Close menu" : "Menu";
}

menuButton.hidden = false;
document.documentElement.classList.add("js");

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") === "false");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileLayout.matches && navigation.classList.contains("is-open")) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

mobileLayout.addEventListener("change", () => setMenuOpen(false));
