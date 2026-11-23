let menuOpen = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close");
let navList = document.querySelector(".nav-list");
let mainMenu = document.querySelector(".main-menu");
let navBar = document.querySelector(".nav-bar");

menuOpen.addEventListener("click", () => {
    navBar.classList.add("active");
});

menuClose.addEventListener("click", () => {
    navBar.classList.remove("active");
});
let slides = document.querySelectorAll(".slide");

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {

    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
}

// Next button
nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

// Previous button
prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

// Automatic slider
setInterval(() => {
    showSlide(currentSlide + 1);
}, 4000);