let display = document.querySelector('.result-place');
let calculation = '';
let darkTheme = true;

// Load calculation from local storage if it exists
let history = localStorage.getItem('calculation');
if (history) {
    calculation = history;
    display.innerHTML = calculation;
}

function updateCalculation(value) {
    calculation += value;
    display.innerHTML = `${calculation}`;
    localSave();
}

function calculateResult() {
    try {
        calculation = eval(calculation).toString();
        display.innerHTML = calculation;
        localSave();
    } catch (error) {
        display.innerHTML = 'Error';
        calculation = '';
    }
}
//
function clearCalculation() {
    calculation = '';
    display.innerHTML = '';
    localSave();
}

function sqrt() {
    try {
        calculation = Math.sqrt(eval(calculation)).toString();
        display.innerHTML = calculation;
        localSave();
    } catch (error) {
        display.innerHTML = 'Error';
        calculation = '';
    }
}

function backspace() {
    calculation = calculation.slice(0, -1);
    display.innerHTML = calculation;
    localSave();
}

function localSave() {
    localStorage.setItem('calculation', calculation);
}

function toggleTheme() {
    darkTheme = !darkTheme;
    if (darkTheme) {
        document.documentElement.style.setProperty('--bg-color', 'rgb(25, 25, 25)');
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'rgb(25, 25, 25)');
    }
}

// Add keyboard support
document.addEventListener('keydown', function (event) {
    if (!isNaN(event.key) || ['+', '-', '*', '/', '.', '%'].includes(event.key)) {
        updateCalculation(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (event.key === 'Escape') {
        clearCalculation();
    }
});