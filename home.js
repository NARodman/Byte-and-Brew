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

//Reviews 

let reviewIndex = 0;

document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('reviewer-name').value.trim();
    let reviewText = document.getElementById('review-text').value.trim();
    let rating = document.querySelector('input[name="rating"]:checked');
    
    if (!name || !reviewText || !rating) {
        alert("Please fill out all fields and select a rating.");
        return;
    }

    let starRating = "★".repeat(rating.value);
    let newReview = document.createElement('div');
    newReview.classList.add('review-card');
    newReview.innerHTML = `
        <p>"${reviewText}"</p>
        <p class="author">- ${name}</p>
        <div class="stars">${starRating}</div>
    `;

    let targetRow = reviewIndex % 2 === 0 ? 'review-row-1' : 'review-row-2';
    document.getElementById(targetRow).appendChild(newReview);
    reviewIndex++;

    // Store in Local Storage for future deletion
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.push({ name, reviewText, rating: rating.value });
    localStorage.setItem('reviews', JSON.stringify(savedReviews));

    // Clear the form
    document.getElementById('reviewer-name').value = '';
    document.getElementById('review-text').value = '';
    document.querySelector('input[name="rating"]:checked').checked = false;
});

// Load existing reviews on page load
window.onload = function() {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    savedReviews.forEach((review, index) => {
        let starRating = "★".repeat(review.rating);
        let newReview = document.createElement('div');
        newReview.classList.add('review-card');
        newReview.innerHTML = `
            <p>"${review.reviewText}"</p>
            <p class="author">- ${review.name}</p>
            <div class="stars">${starRating}</div>
        `;

        let targetRow = index % 2 === 0 ? 'review-row-1' : 'review-row-2';
        document.getElementById(targetRow).appendChild(newReview);
    });
};

