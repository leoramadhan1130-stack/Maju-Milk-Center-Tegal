//  tooggle class active

// hamburger menu
const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// close hamburger menu when click outside
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

//  Menu Dropdown
const menuBtn = document.querySelector(".menu-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  dropdownMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("active");
  }
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((reveal) => {
    const top = reveal.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      reveal.classList.add("active");
    }
  });
});

const cards = document.querySelectorAll(".menu-box, .contact-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = ".7s ease";
    }
  });
});

cards.forEach((card) => observer.observe(card));



const literanBox = document.querySelectorAll(".literan-box");

literanBox.forEach((box) => {
  observer.observe(box);
});