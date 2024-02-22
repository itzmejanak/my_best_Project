function appendToResult(value) {
    let result = document.getElementById("result");
    let currentResult = result.textContent;
    result.textContent = currentResult + value;

    if (value === "=") {
        result.textContent = eval(currentResult);
            
        }
    else if (value === 'C') {
            result.innerHTML = "0";
        }
    else if (value === '☒') {
            result.innerHTML = currentResult.slice(0, -1);
        }
    else if(value === 'x²'){
                result.textContent = Math.pow(parseFloat(currentResult), 2)
        }
}

