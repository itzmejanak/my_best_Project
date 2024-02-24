document.addEventListener("DOMContentLoaded", function() {
    // Selecting elements
    const resultTextarea = document.getElementById("result");
    const resultDiv = document.getElementById("result1");
    const buttons = document.querySelectorAll(".btn");
    const clearButton = document.getElementById("clear");

    // Adding click event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // console.log(button);
            if(button.textContent === "C"){
                resultTextarea.value = ""
                resultDiv.innerHTML = ""
            }else if(button.textContent === "☒"){
                let res = resultTextarea.value;
                resultTextarea.value = res.slice(0, -1);
            }else if(button.textContent === "="){
                const result = eval(resultTextarea.value);
                resultTextarea.value = result;
                resultDiv.textContent = result;
            }else if(button.textContent === "x²"){
                const result = eval(resultTextarea.value);
                resultTextarea.value = Math.pow(Number(result), 2);
                resultDiv.textContent = Math.pow(parseFloat(result), 2);
            }else if(button.textContent === "x"){
                resultTextarea.value += "*";
            }
            else{
                if(resultTextarea.value === "0"){
                    resultTextarea.value = button.textContent;
                }else{
                    resultTextarea.value += button.textContent
                }
            }
        });
    });
});