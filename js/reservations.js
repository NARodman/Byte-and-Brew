document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //Get form data 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        //Validate required fields
        if (!name || !email || !date || !time || !guests) {
            showAlert("Please fill in all required fields.", "error");
            return;
        }
}