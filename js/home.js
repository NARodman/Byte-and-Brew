document.addEventListener('DOMContentLoaded', function() {
    //Navbar Toggle 
    const toggler = document.querySelector('.navbar-toggler');
    toggler.addEventListener("click", function(){
        this.classList.toggle("active");
    });
});