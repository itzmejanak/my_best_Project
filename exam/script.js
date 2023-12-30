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

const referenceDate = new Date('2023-11-19');
function getWeekNumber(){
	const differenceInTime = new Date().getTime() - referenceDate.getTime();
	const differenceInWeeks = Math.floor(differenceInTime / (1000 * 3600 * 24 * 7));
	return 	differenceInWeeks+3;
}

const currentDate = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long'};
const formattedDate = currentDate.toLocaleDateString('en-US', options);

document.getElementById("date").innerHTML = `📅 Week ${getWeekNumber()}: ${formattedDate} ${currentDate.getFullYear()}`;

var nearestExam=365;
var nearestExam2=365;

var allCount=soonCount=upcomingCount=expiredCount=0;
const allCountDiv=document.getElementById("allCount");
const soonCountDiv=document.getElementById("soonCount");
const upcomingCountDiv=document.getElementById("upcomingCount");
const expiredCountDiv=document.getElementById("expiredCount");
const divList=[allCountDiv,soonCountDiv,upcomingCountDiv,expiredCountDiv];

function showDiv(clas){	
	Array.from(document.getElementsByClassName("guide-slot")).forEach(function(element) {
		if((element.getElementsByClassName("guide-slot_card")[0].classList).contains(clas)){
			element.classList.remove("hide");
			element.classList.remove("invisible");
		}else{
			element.classList.add("hide");
			setTimeout(function(){
    element.classList.add("invisible");
}, 1500); 

		}
	});
}

function selectDiv(div){
	var i=0;
	divList.forEach(function(element) {
		if(i==div){if(div!=0){element.classList.add("selected");}}
		else{element.classList.remove("selected");}
		i++;
	});
}

allCountDiv.onclick = function() { selectDiv(0); showDiv('guide-slot_card') };
soonCountDiv.onclick = function() { selectDiv(1); showDiv('soon') };
upcomingCountDiv.onclick = function() { selectDiv(2);  showDiv('upcoming') };
expiredCountDiv.onclick = function() { selectDiv(3);  showDiv('expired') };


function updateEventStatus() {
    const currentDate = new Date();
    const scheduleStages = document.querySelectorAll('.guide-slot_card[data-date]');

    scheduleStages.forEach(scheduleStage => {
        const eventDate = new Date(scheduleStage.getAttribute("data-date"));
        const eventStatusElement = scheduleStage.querySelector('.event-status');
        const remainingDaysElement = scheduleStage.querySelector('.remaining-days');

        const timeDifference = (eventDate - currentDate);
        const daysUntilExam = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) +1;
		
		
		if (daysUntilExam >= 0) {
		if(daysUntilExam<nearestExam){
			nearestExam2=nearestExam;
			nearestExam=daysUntilExam;
		}
		document.getElementById("nextExam").innerHTML = `Next Exam in: ${nearestExam} days and ${nearestExam2} days`;
		}
		allCount++;
		allCountDiv.innerHTML = "All: "+allCount;
        if (daysUntilExam <= 30 && daysUntilExam >= 0) {
            // New event (within 30 days of the current date)
			soonCount++;
			soonCountDiv.innerHTML = "Soon: "+soonCount;			
            scheduleStage.classList.add("soon");
            eventStatusElement.textContent = "soon";
            remainingDaysElement.textContent = `(${Math.abs(daysUntilExam)} days)`;
        } else if (eventDate > currentDate) {
            // Upcoming event
			upcomingCount++;
			upcomingCountDiv.innerHTML = "Upcoming: "+upcomingCount;
            scheduleStage.classList.add("upcoming");
            eventStatusElement.textContent = "upcoming";
            remainingDaysElement.textContent = `(${daysUntilExam} days)`;
        } else {
            // Expired event
			expiredCount++;
			expiredCountDiv.innerHTML = "Expired: "+expiredCount;			
            scheduleStage.classList.add("expired");
            eventStatusElement.textContent = "Expired";
            remainingDaysElement.textContent = ""; // No need to show remaining days for expired events
        }
    });
}

// Call the function to update event status
updateEventStatus();