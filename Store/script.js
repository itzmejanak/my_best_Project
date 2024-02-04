 // Initialize ScrollMagic controller
 var controller = new ScrollMagic.Controller();

 // Create a scene for each .apk element
 document.querySelectorAll('.apk').forEach(function(apk) {
     var scene = new ScrollMagic.Scene({
         triggerElement: apk,
         offset: 0, // Adjust the offset as needed
         reverse: false // Change to true if you want the animation to reverse when scrolling up
     })
     .setClassToggle(apk, "active") // Add a class when in the trigger range
     .addTo(controller); // Add the scene to the controller
 });