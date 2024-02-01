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
