// Selections
const addButton = document.querySelector('.plus');
const resetButton = document.querySelector('.reset');
const minusButton = document.querySelector('.minus');
const counter = document.querySelector('.counter');
//Event Listener
    document.addEventListener('DOMContentLoaded', reset);
    addButton.addEventListener('click', increase);
    resetButton.addEventListener('click', reset);
    minusButton.addEventListener('click', decrease);

// Functions
var count = 0

function increase() {
    count += 1;
    if (count > 0) {
        counter.style.color = 'green';
    }
    if (count == 0) {
        counter.style.color = 'gray';
    }
    counter.innerHTML = count;
}

function reset() {
    count = 0;
    counter.innerHTML = count;
    counter.style.color = 'gray';
}

function decrease() {
    count -= 1;
    if (count < 0) {
        counter.style.color = 'red';
    }
    if (count == 0) {
        counter.style.color = 'gray';
    }
    counter.innerHTML = count;
}