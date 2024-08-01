
let display = document.querySelector('.result-place');
let calculation = '';

// Load calculation from local storage if it exists
let history = localStorage.getItem('calculation');
if (history) {
    calculation = history;
    display.innerHTML = calculation;
}

//calculateButton
function updateCalculation(value) {
    calculation += value;
    display.innerHTML = `${calculation}`;
    localSave();
}

//result button
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


//clear button
function clearCalculation() {
    calculation = '';
    display.innerHTML = '';
    localSave();
}
// local save
function localSave() {
    localStorage.setItem('calculation', calculation);
}