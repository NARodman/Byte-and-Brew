document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for confirmation box (shortened duration)
    const confirmationBox = document.querySelector(".confirmation-box");
    if (confirmationBox) {
        confirmationBox.style.opacity = 0;
        confirmationBox.style.transform = "translateY(20px)";
        setTimeout(() => {
            confirmationBox.style.opacity = 1;
            confirmationBox.style.transform = "translateY(0)";
        }, 300); // 0.3s duration
    }

    // Retrieve stored reservation data
    const reservationData = JSON.parse(localStorage.getItem("reservationData"));
    if (reservationData) {
        document.querySelector(".reservation-details").innerHTML = `
            <p><strong>Date: </strong> ${reservationData.date}</p>
            <p><strong>Time: </strong> ${reservationData.time}</p>
            <p><strong>Guests: </strong> ${reservationData.guests} People</p>
        `;
    }

    // "Add to Calendar" functionality
    const addToCalendarBtn = document.querySelector(".add-to-calendar");
    if (addToCalendarBtn) {
        addToCalendarBtn.addEventListener("click", () => {
            createCalendarEvent(reservationData);
        });
    }

    // "View Reservation Details" - Open Modal
    const viewDetailsBtn = document.querySelector(".view-details");
    const modal = document.querySelector(".modal");
    const closeModalBtn = document.querySelector(".close-modal");

    if (viewDetailsBtn && modal) {
        viewDetailsBtn.addEventListener("click", () => {
            document.getElementById("modalDate").textContent = reservationData.date;
            document.getElementById("modalTime").textContent = reservationData.time;
            document.getElementById("modalGuests").textContent = reservationData.guests + " People";
            document.querySelector(".modal-overlay").style.display = "block";
            modal.classList.add("show");
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            document.querySelector(".modal-overlay").style.display = "none";
            modal.classList.remove("show");
        });
    }

    // Function to generate and download .ics calendar file
    function createCalendarEvent(data) {
        if (!data) return; // Prevent errors if no data exists

        const event = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Reservation at Byte & Brew Café
DTSTART:${formatDateTime(data.date, data.time)}
DTEND:${formatDateTime(data.date, addTime(data.time, 2))}
LOCATION:Byte & Brew Café, 801 W Broad St, Richmond VA 23220
DESCRIPTION:Reservation for ${data.guests} guests at ${data.time}.
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([event], { type: "text/calendar" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "reservation.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showAlert("Added to Calendar!", "success");
    }

    // Function to format date & time for calendar event
    function formatDateTime(date, time) {
        const dateTime = new Date(`${date}T${time}`);
        return dateTime.toISOString().replace(/-|:|\.\d+/g, "");
    }

    // Function to add hours to time (handles 24-hour format properly)
    function addTime(time, hours) {
        let [hh, mm] = time.split(":").map(Number);
        let newHour = (hh + hours) % 24;
        return `${newHour.toString().padStart(2, "0")}:${mm}`;
    }

    function showAlert(message, type) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${type}`;
        alertBox.innerText = message;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 3000);
    }

    // Back to homepage functionality
    const backToHomepageBtn = document.querySelector(".back-to-homepage");
    if (backToHomepageBtn) {
        backToHomepageBtn.addEventListener("click", () => {
            window.location.href = "../html/index.html"; // Redirect to the homepage (adjust URL as needed)
        });
    }
});
