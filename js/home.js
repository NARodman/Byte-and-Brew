document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slider = document.querySelector(".hero-slider");

    function moveSlides() {
        slideIndex = (slideIndex + 1) % totalSlides;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(moveSlides, 5000);
});
