document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login clicked! (Functionality coming soon)");
    });
});

// Redirect to homepage
function goHome() {
    window.location.href = "index.html"; // Change this if your homepage URL is different
}
