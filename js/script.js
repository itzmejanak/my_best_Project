/**========================================typyng animation===================================**/
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    gsap.to(crsr, {
        left: dets.clientX + "px",
        top: dets.clientY + "px",
        ease: Power3
    })

})
document.addEventListener("mousemove",function(dets){
    gsap.to(blur, {
        delay: .2,
        left: dets.clientX + "px",
        top: dets.clientY + "px",
        ease: Power3
    })

})

var typed = new Typed(".typing", {
    strings: ["Web Designer", "Software Developer", "Coder"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


/**========================================EMAIL response AT SEND MESSAGES BUTTON===================================**/
function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "itzmejanak@gmail.com",
        Password : "7FDDF3831D6B5F8E93A69BCB30C33F0DD2FA",
        To : 'janakdevkota2060@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "hello i am user"
    }).then(
      message => alert(message)
    );
}
// Select all elements with the class "box"
const boxes = document.querySelectorAll(".box");

// Loop through each box element
boxes.forEach(box => {
    // Add a click event listener to each box
    box.addEventListener("click", function() {
        // Remove background color from all boxes
        boxes.forEach(otherBox => {
            otherBox.style.backgroundColor = "transparent";
            otherBox.style.boxShadow = "none";
            otherBox.style.borderRadius = "3px";
        });

        // Set background color only for the clicked box
        this.style.backgroundColor = "crimson";
        this.style.boxShadow = "1px 1px 5px black";
        // this.style.borderRadius = "15px";
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    toggler.style.zIndex = 9999;

    // Function to close toggle when clicked outside aside menu
    function closeToggle(event) {
        if (!aside.contains(event.target) && !toggler.contains(event.target)) {
            toggler.classList.remove('active');
            aside.classList.remove('active');
        }
    }

    // Event listener for toggler click
    toggler.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        this.classList.toggle('active');
        aside.classList.toggle('active');
        aside.style.zIndex = 9999;
    });

    // Event listener for window click
    window.addEventListener('click', closeToggle);

    // Event listener for scroll
    let isScrolling;
    window.addEventListener('scroll', function() {
        // Clear the timeout if scroll event is triggered
        window.clearTimeout(isScrolling);
        
        // Check if toggle is active, then turn it off after 500ms of inactivity
        if (toggler.classList.contains('active') || aside.classList.contains('active')) {
            isScrolling = setTimeout(function() {
                toggler.classList.remove('active');
                aside.classList.remove('active');
            }, 100);
        }
    });
});
