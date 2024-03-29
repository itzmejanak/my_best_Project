// Get the input element by its ID
let inputElement = document.getElementById('numberInput');
let checkbox = document.getElementById('numberCheckbox');
let ol = document.querySelector("ol");
let btn = document.querySelector("#right button");
let result = document.querySelector("#result");
let box = document.querySelector("#final");

btn.addEventListener('click', function() {
    let inputText = document.querySelector("textarea").value;
    ol.innerHTML = "";
    result.innerHTML = "";
    if (inputElement.value == '') {
            box.style.display = "block";
            result.innerHTML = "Enter How many time you want to repeat.💪";
        if(inputText === ''){
            box.style.display = "block";
            result.innerHTML = "Enter What you want to repeat 😊.";
        }
    } 
    else {
        if (checkbox.checked) {
            box.style.display = "block";
            for(let i = 1; i <= inputElement.value; i++) {
                let li = document.createElement("li"); 
                li.textContent = inputText; 
                ol.appendChild(li); 
            }
        } else {
            box.style.display = "block";
            // Generate lines without numbers
            for(let i = 1; i <= inputElement.value; i++) {
                result.innerHTML += inputText + "<br>";
            }
        }
    }
});

function myFunction(){
    inputElement.value = ""; 
    result.innerHTML = "";
    document.querySelector("textarea").value = "";
    ol.innerHTML = '';
}
let copy = document.getElementById("copy");
copy.addEventListener("click", function() {
    let textarea = document.createElement("textarea");
    if (checkbox.checked) {
        copy.style.color = "#11A511"
        copy.style.fontSize = "15px"
        copy.innerHTML = "This Option may not work properly! But Copied"
        textarea.value = ol.innerText;
    } else {
        copy.style.color = "#11B511"
        copy.innerHTML = "Copied"
        textarea.value = result.innerText;
    }
    setInterval(() => {
        copy.style.color = "white"
        copy.innerHTML = "Copy";
    }, 5000);

    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
});

