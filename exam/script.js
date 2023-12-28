function updateAuthorPercentage() {
    const authorElements = document.getElementsByClassName("author-wrapper");

    Array.from(authorElements).forEach(element => {
        const percentage = element.getAttribute("data-per");

        if (percentage) {
            const svgContent = `<svg viewBox="0 0 64 64" class="pie">
                                    <circle r="25%" cx="50%" cy="50%" style="stroke-dasharray: ${percentage} 100"></circle>
                                </svg>`;
            const figCaption = `<figcaption>${percentage}%</figcaption>`;
            element.innerHTML = `${svgContent}${figCaption}`;
        }
    });
}

window.onload = updateAuthorPercentage;

const currentDate = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

document.getElementById("date").innerHTML = `📅 ${formattedDate}`;


function updateEventStatus() {
    const currentDate = new Date();
    const scheduleStages = document.querySelectorAll('.guide-slot_card[data-date]');

    scheduleStages.forEach(scheduleStage => {
        const eventDate = new Date(scheduleStage.getAttribute("data-date"));
        const eventStatusElement = scheduleStage.querySelector('.event-status');
        const remainingDaysElement = scheduleStage.querySelector('.remaining-days');

        const timeDifference = (eventDate - currentDate);
        const daysUntilExam = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) +1;

        if (daysUntilExam <= 30 && daysUntilExam >= 0) {
            // New event (within 30 days of the current date)
            scheduleStage.classList.add("soon");
            eventStatusElement.textContent = "soon";
            remainingDaysElement.textContent = `(${Math.abs(daysUntilExam)} days)`;
        } else if (eventDate > currentDate) {
            // Upcoming event
            scheduleStage.classList.add("upcoming");
            eventStatusElement.textContent = "upcoming";
            remainingDaysElement.textContent = `(${daysUntilExam} days)`;
        } else {
            // Expired event
            scheduleStage.classList.add("expired");
            eventStatusElement.textContent = "Expired";
            remainingDaysElement.textContent = ""; // No need to show remaining days for expired events
        }
    });
}

// Call the function to update event status
updateEventStatus();