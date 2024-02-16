let btn = document.querySelector("#search-btn");
const api = "46440f5961e110bd4a5a8ec7b377caf1";

async function checkWeather() {
    let input = document.querySelector("#input").value;
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}`);
    var finalData = await data.json();
    console.log(finalData);
    let kel = Number(finalData.main.temp);
    let cen = kel - 273.15;
    console.log(finalData);
    document.querySelector("#cityName").innerHTML = finalData.name;
    document.querySelector("#celcius").innerHTML = Math.round(cen) + " °C";
    document.querySelector("#hum").innerHTML = finalData.main.humidity + "%";
    document.querySelector("#speed").innerHTML = finalData.wind.speed + " Km/h";

    let img = document.querySelector("#middle img");
    switch (finalData.weather[0].main) {
        case "Clear":
            img.src = "images/clear.png";
            break;
        case "Clouds":
            img.src = "images/clouds.png";
            break;
        case "Drizzle":
            img.src = "images/drizzle.png";
            break;
        case "Mist":
            img.src = "images/mist.png";
            break;
        default:
            img.src = "images/rain.png";
            break;
    }
}

btn.addEventListener("click", () => {
    if(document.querySelector("#input").value.trim() == ""){
        document.querySelector("#cityName").innerHTML = "Invalid Search"
    }else{
        document.querySelector("#down").style.display = "block"
        checkWeather();
    }
   
});
