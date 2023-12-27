/* ==============================================toggle style switcher=========================================== */
const sst = document.querySelector(".style-switcher-toggler")
sst.addEventListener("click", function(){
    document.querySelector(".style-switcher").classList.toggle("open")
})

// hide style switcher on scrolll
window.addEventListener("scroll", function(){
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})




/* ==============================================themes color=========================================== */

const as = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    as.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })

}




/* ==============================================themes for light and dark mode=========================================== */
  

const dn = document.querySelector(".day-night");

dn.addEventListener("click", function(){
    dn.querySelector("i").classList.toggle("fa-moon");
    dn.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");



})
window.addEventListener("load", function(){
    if(document.body.classList.contains("dark"))
    {
        dn.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dn.querySelector("i").classList.add("fa-moon");
    }
})