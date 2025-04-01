document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category-item");
    const categorySections = document.querySelectorAll(".category-section");

    // Initially hide all sections
    categorySections.forEach((section) => section.classList.remove("active"));

    // Handle category click
    categoryItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const category = this.getAttribute("data-category");

            // Hide all sections
            categorySections.forEach((section) => {
                section.classList.remove("active");
            });

            // Show the selected section
            const activeSection = document.querySelector(`.category-section[data-category="${category}"]`);
            if (activeSection) {
                activeSection.classList.add("active");
            }
        });
    });
});
