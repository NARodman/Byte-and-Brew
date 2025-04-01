//Javacsript for Category Filtering 

document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll(".category-item a");
    const sections = document.querySelectorAll(".section.flex-with-padding");

    categoryLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Get target section ID
            const targetId = this.getAttribute("hred").substring(1);
            const targetSection = document.getElementById(targetId);

            //Hide all sections first 
            sections.forEach((section) => {
                section.style.display = "none";
            });

            //Show the clicked category section
            targetSection.style.display = "flex";
            targetSection.style.animation = "fadeIn 0.5s ease-in-out";

            //Scroll to top after selection for smoothness
            window.scrollTo({ top: 0, behavior: "smooth"});
        });
    });


    //Optional: Show the first section by default
    sections.forEach((section) => {
        section.style.display = "none";
    });

    document.getElementById("drinks").style.display = "flex"; // Show the first section by default
});