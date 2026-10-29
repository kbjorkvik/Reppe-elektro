const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function closeMenu() {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

if (contactForm instanceof HTMLFormElement && feedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent = "Kontaktskjemaet er ikke koblet til en e-postadresse ennå.";
  });
}
