window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



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

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Lazy Load Images for Better Performance
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});

