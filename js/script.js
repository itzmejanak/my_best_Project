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


function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var correctPassword = "yourpassword"; // Replace with your desired password

    if (passwordInput === correctPassword) {
        // Correct password, show the exam content
        document.getElementById("password-dialog").style.display = "none";
        document.getElementById("exam-content").style.display = "block";
    } else {
        // Incorrect password, display an error message or take appropriate action
        alert("Incorrect password. Please try again.");
    }
}

document.getElementById("exam-link").addEventListener("click", function () {
    // Show the password dialog when the "Exam" link is clicked
    document.getElementById("password-dialog").style.display = "flex";
});
