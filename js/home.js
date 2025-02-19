document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector(".navbar-toggler");
    const navCollapse = document.querySelector(".navbar-collapse");

    toggler.addEventListener("click", function() {
        navCollapse.classList.toggle("show");
    });

});