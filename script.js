// Countdown Timer
const countdownElement = document.getElementById("countdown");
const eventDate = new Date("2024-12-31T00:00:00"); // Set your event date here

function updateCountdown() {
    const now = new Date();
    const timeRemaining = eventDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining < 0) {
        countdownElement.innerHTML = "Event has started!";
    }
}

// Update every second
setInterval(updateCountdown, 1000);

// Timeline Interaction
function highlightEvent(eventElement) {
    document.querySelectorAll(".timeline .event").forEach((el) => el.classList.remove("active"));
    eventElement.classList.add("active");
}
