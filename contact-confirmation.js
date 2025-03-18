document.addEventListener("DOMContentLoaded", () => {
    // Apply fade-in effect after loading
    const confirmationBox = document.querySelector(".confirmation-box");

    if (confirmationBox) {
        setTimeout(() => {
            confirmationBox.style.opacity = 1;
            confirmationBox.style.transform = "translateY(0)";
        }, 300);
    }
});
