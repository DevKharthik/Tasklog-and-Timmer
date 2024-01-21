let button = document.getElementById('button');
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let taskInput = document.getElementById('task');
let descriptionInput = document.getElementById('description');
let tableBody = document.getElementById('tableBody');
let count = 0;
let flag = 0;
let bool1 = 0;
let intervalId;

button.addEventListener('click', start);

function start() {
    if (button.textContent === 'Start') {
        button.textContent = 'Stop';
        button.style.setProperty('background-color', 'red');
        intervalId = setInterval(startTimer, 1000);
    } else {
        button.textContent = 'Start';
        button.style.setProperty('background-color', 'green');

        appendToTable(taskInput.value, descriptionInput.value, `${hour.textContent}:${minutes.textContent}:${seconds.textContent}`);

        count = 0;
        flag = 0;
        bool1 = 0;
        taskInput.value = '';
        descriptionInput.value = '';
        clearInterval(intervalId);
        seconds.textContent = '00';
        minutes.textContent = '00';
        hour.textContent = '00';
    }

    function startTimer() {
        count++;
        if (count < 60) {
            seconds.textContent = count.toString().padStart(2, '0');
        } else if (count !== 60) {
            count = 0;
            seconds.textContent = '00';
            flag++;
            minutes.textContent = flag.toString().padStart(2, '0');
        } else if (flag === 60) {
            flag = 0;
            minutes.textContent = '00';
            bool1++;
            hour.textContent = bool1.toString().padStart(2, '0');
        }
    }
}

function appendToTable(task, description, duration) {
    let row = document.createElement('tr');
    let taskCell = document.createElement('td');
    let descriptionCell = document.createElement('td');
    let durationCell = document.createElement('td');

    taskCell.textContent = task;
    descriptionCell.textContent = description;
    durationCell.textContent = duration;

    row.appendChild(taskCell);
    row.appendChild(descriptionCell);
    row.appendChild(durationCell);

    tableBody.appendChild(row);
}
