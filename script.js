let firstNum = "";
let op = "";
let test = false;
let firstNumber = false;
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function equals() {
    let result = operate(op, parseFloat(firstNum), parseFloat(displayText.textContent, 10));
    displayText.textContent = `${roundLongDecimals(result)}`;
    op = "";
    firstNum = displayText.textContent;
    test = false;
    firstNumber=false
    secondNumber=false;
}

function operate(opp, a, b) {
    return window[opp](a, b).toExponential();
}

function operator(e) {
    if (op.length > 0 && secondNumber == true) {
        equals();
        op = e;
        firstNum= displayText.textContent;
        firstNumber=true;
        return;
    }
    else if (op.length > 0) {
        op = e;
        return;
    }
    firstNum = displayText.textContent;
    firstNumber = true;
    op = e;
}

function roundLongDecimals(num) {
    const decimalPlaces = (num.toString().split('.')[1] || '').length;
    if (decimalPlaces > 3) {
        return Math.round(num * 1000) / 1000;
    }
    return num;
}



const nums = document.querySelector('.Numbers');
let displayText = document.querySelector('.display');

const btn = nums.querySelectorAll('.num');
btn.forEach((button) =>
    button.addEventListener("click", function () {

        if (op.length > 0 && test == false) {
            displayText.textContent = button.textContent;
            test = true;
        }
        else if (displayText.textContent == '0') displayText.textContent = button.textContent;
        else displayText.textContent += button.textContent;
        if (firstNumber == true) secondNumber = true;

    }))
const a = document.querySelector('#add');
a.addEventListener("click", function () {
    operator('add');
})
const s = document.querySelector('#subtract');
s.addEventListener("click", function () {
    operator('subtract');
})
const m = document.querySelector('#multiply');
m.addEventListener("click", function () {
    operator('multiply');
})
const d = document.querySelector('#divide');
d.addEventListener("click", function () {
    operator('divide');
})
const e = document.querySelector('#equals');
e.addEventListener("click", function () {
    equals();
})
const dec = document.querySelector('#decimal');
dec.addEventListener("click", function () {
    if (!displayText.textContent.includes('.')) {
        displayText.textContent += '.';
    }
})
const c = document.querySelector('#clear');
c.addEventListener("click", function () {
    displayText.textContent = '0';
    op = "";
    firstNum = "";
    firstNumber=false;
    secondNumber=false;
})



