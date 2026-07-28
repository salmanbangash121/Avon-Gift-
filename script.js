const menuBtn = document.getElementById("menu-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("menu-backdrop");
const menuLinks = document.querySelectorAll(".menu-link");
const lines = menuBtn.querySelectorAll(".hb-line");

function openMenu() {
    mobileMenu.classList.remove("translate-x-full", "opacity-0");
    backdrop.classList.remove("opacity-0", "invisible");
    lines[0].classList.add("rotate-45", "translate-y-2");
    lines[1].classList.add("opacity-0");
    lines[2].classList.add("-rotate-45", "-translate-y-2");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("overflow-hidden");
}

function closeMenu() {
    mobileMenu.classList.add("translate-x-full", "opacity-0");
    backdrop.classList.add("opacity-0", "invisible");
    lines[0].classList.remove("rotate-45", "translate-y-2");
    lines[1].classList.remove("opacity-0");
    lines[2].classList.remove("-rotate-45", "-translate-y-2");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("overflow-hidden");
}

menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
});

// Close (X) button inside menu
menuCloseBtn.addEventListener("click", closeMenu);

// Click outside (backdrop) closes menu
backdrop.addEventListener("click", closeMenu);

// Clicking any link inside menu also closes it
menuLinks.forEach(link => link.addEventListener("click", closeMenu));

// Escape key closes menu
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});


    AOS.init({
      duration: 1000,
      once: true
    });
