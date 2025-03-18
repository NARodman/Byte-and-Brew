document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simple form validation
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (firstName === "" || lastName === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Redirect to contact confirmation page
    window.location.href = "contact-confirmation.html";
});
