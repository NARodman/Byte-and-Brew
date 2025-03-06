document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        // Validate required fields
        if (!name || !email || !date || !time || !guests) {
            showAlert("Please fill in all required fields.", "error");
            return;
        }

        // Store reservation data in localStorage (simulating database storage)
        const reservationData = {
            name,
            email,
            date,
            time,
            guests,
        };
        localStorage.setItem("reservationData", JSON.stringify(reservationData));

        // Smooth transition to confirmation page
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "confirmation.html";
        }, 800);
    });

    // Alert function
    function showAlert(message, type) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${type}`;
        alertBox.innerText = message;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 3000);
    }
});
