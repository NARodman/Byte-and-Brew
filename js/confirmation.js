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

    // Smooth scrolling effect for background
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // "Add to Calendar" functionality
    document.querySelector(".add-to-calendar").addEventListener("click", () => {
        createCalendarEvent(reservationData);
    });

    // "View Reservation Details" - Open Modal
    document.querySelector(".view-details").addEventListener("click", () => {
        document.querySelector(".modal").classList.add("show");
    });

    // Close Modal
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.querySelector(".modal").classList.remove("show");
    });

    // Function to generate and download .ics calendar file
    function createCalendarEvent(data) {
        const event = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Reservation at Byte & Brew Café
DTSTART:${formatDateTime(data.date, data.time)}
DTEND:${formatDateTime(data.date, addTime(data.time, 2))}
LOCATION:Byte & Brew Café, 420 Cyber Street, Neo District
DESCRIPTION:Reservation for ${data.guests} at ${data.time}.
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

    // Function to add hours to time (reservation lasts 2 hours)
    function addTime(time, hours) {
        const [hh, mm] = time.split(":").map(Number);
        const newHour = (hh + hours) % 24;
        return `${newHour.toString().padStart(2, "0")}:${mm}`;
    }

    function showAlert(message, type) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${type}`;
        alertBox.innerText = message;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), 3000);
    }
});
