let input = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");
let msg = document.querySelector("#msg");
function addTask() {
    if (input.value === '') {
        msg.innerHTML = "Invalid input !"
    } else {
        let li = document.createElement("li");
        li.textContent = input.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.textContent = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showList() {
    let storedData = localStorage.getItem("data");
    if (storedData) {
        taskList.innerHTML = storedData;
    }
}

showList();
