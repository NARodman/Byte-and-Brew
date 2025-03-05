document.addEventListener("DOMContentLoaded", () => {
    // Retrieve stored reservation data
    const reservationData = JSON.parse(localStorage.getItem("reservationData"));

    if (reservationData) {
        document.getElementById("reservationDate").textContent = reservationData.date;
        document.getElementById("reservationTime").textContent = reservationData.time;
        document.getElementById("reservationGuests").textContent = reservationData.guests + " People";
    }

    // Fade-in effect for confirmation box
    const confirmationBox = document.querySelector(".confirmation-box");
    confirmationBox.style.opacity = 0;
    setTimeout(() => {
        confirmationBox.style.opacity = 1;
        confirmationBox.style.transform = "translateY(0)";
    }, 300);

    // Button hover effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling effect
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // "Add to Calendar" animation
    document.querySelector(".add-to-calendar").addEventListener("click", () => {
        showAlert("Added to Calendar!", "success");
    });

    function showAlert(message, type) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${type}`;
        alertBox.innerText = message;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 3000);
    }
});
