window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
};

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    const icon = document.getElementById("theme-icon");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 4000);

/* Fade in on scroll */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
