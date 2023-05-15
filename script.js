const hourHand = document.getElementById("hours");
const minuteHand = document.getElementById("minutes");
const secondHand = document.getElementById("seconds");

function updateClockHands() {

    // Get current time
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    // Calculate rotation of hands
    const hourRotation = 30 * (currentHours % 12) + 0.5 * currentMinutes;
    const minuteRotation = 6 * currentMinutes + 0.1 * currentSeconds;
    const secondRotation = 6 * currentSeconds;

    // Update clock hands rotation
    hourHand.setAttribute('transform', `rotate(${hourRotation} 250 250)`);
    minuteHand.setAttribute('transform', `rotate(${minuteRotation} 250 250)`);
    secondHand.setAttribute('transform', `rotate(${secondRotation} 250 250)`);
}

// Function call
updateClockHands();

// Update every second
setInterval(updateClockHands, 1000);
