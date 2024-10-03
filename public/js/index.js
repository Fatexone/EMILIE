let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const sliderContainer = document.querySelector('.slider-container');
    currentSlide = (index + totalSlides) % totalSlides;
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Défilement automatique toutes les 5 secondes
setInterval(() => {
    moveSlide(1);
}, 5000);

// Initialiser avec la première slide
showSlide(currentSlide);
