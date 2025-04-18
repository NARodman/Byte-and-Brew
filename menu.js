document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category-item");
    const categorySections = document.querySelectorAll(".category-section");

    // Hide all sections initially
    categorySections.forEach((section) => section.classList.remove("active"));

    // Handle category clicks
    categoryItems.forEach((item) => {
        item.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Hide all sections instantly
            categorySections.forEach((section) => {
                section.classList.remove("active");
                section.style.display = "none"; // Ensure it’s hidden properly
            });

            // Show the selected section smoothly
            const activeSection = document.querySelector(`.category-section[data-category="${category}"]`);
            if (activeSection) {
                activeSection.style.display = "block"; // Show first to trigger fade
                setTimeout(() => {
                    activeSection.classList.add("active"); // Then fade in smoothly
                }, 10);
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Scroll back to top when clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
