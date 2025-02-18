document.addEventListener("DOMContentLoaded", function() {
    //Navbar Toggle 
    const toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function(){
        this.classList.toggle("active");
    });

    // Smooth Scroll Effect for Links (Optional Enhancement)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
});