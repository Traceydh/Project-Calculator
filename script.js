//Set variables 
let currentNum = '';
let previousNum = '';
let operator = '';
let solution = '';

//Get all buttons from HTML file 
//number buttons 
const numberButton = document.querySelectorAll('[data-number]');
//operator button
const operatorButton = document.querySelectorAll('[data-operator]');
//equal button
const equalButton = document.querySelector('#equal');
//delete button
const deleteButton = document.querySelector('#delete');
//all clear button 
const clearButton = document.querySelector('#clear');
//display area 
const currentDisplay = document.querySelector('#currentDisplay');
//Display 0 initially 
currentDisplay.textContent = '0';
const previousDisplay = document.querySelector('#previousDisplay');


//Display number user is typing
numberButton.forEach(button => button.addEventListener('click', (e) => {
    numberFunction(e.target.textContent);
} ));

function numberFunction(number) {
    if (currentNum.length >= 14) {
        return
    }
    currentNum += number;
    currentDisplay.textContent = currentNum;
}

//operator buttons, store display number as previous number 
//Store operator 
operatorButton.forEach(button => button.addEventListener('click', (e) => {
    //execute operator is user presses an operator again instead of = 
    if (previousNum == '' || currentNum == '') {
        operatorFunction(e.target.textContent);
    } else {
        makeSolution();
    }
} ));

function operatorFunction(op) {
    //store operator 
    operator = op;
    //store current number as previous number, if it is the first thing entered on calculator 
    //if = button has been used before, use the solution number as previous num
    if (solution == '') {
        previousNum = currentNum;
    } else {
        previousNum = solution;
    }
    previousDisplay.textContent = previousNum + ' ' + operator;
    currentNum = '';
    currentDisplay.textContent = '';
}

//perform operator on current and previous number 
equalButton.onclick = () => {
    //if no previous or current number don't respond 
    if (currentNum == '' || previousNum == '') {
        return
    }
    makeSolution()
}

//execute operate button, display solution
function makeSolution() {
    solution = operate(previousNum, operator, currentNum);
    previousDisplay.textContent = previousNum + ' ' + operator + ' ' + currentNum;
    //display up to 4 decimal places if required 
    currentDisplay.textContent = Number(solution.toFixed(4));
    previousNum = solution;
    currentNum  = '';
}

//clear everything
clearButton.onclick = () => {
    currentNum = '';
    previousNum = '';
    operator = '';
    solution = '';
    currentDisplay.textContent = '0';
    previousDisplay.textContent = '';
}

//Delete one digit from current display 
deleteButton.onclick = () => {
    //if not more digits to delete, stop at 0
    if (currentNum.slice(0,-1) == '') {
        currentNum = currentNum.slice(0,-1);
        currentDisplay.textContent = '0';
        return
    }
    currentNum = currentNum.slice(0,-1);
    currentDisplay.textContent = currentNum;
}

// const allButtons = document.querySelectorAll('button');
// allButtons.forEach(button => button.setAttribute('value', `${button.textContent}`));
// allButtons.forEach(button => button.addEventListener('click', display));

//ADD function 
const add = function(num1, num2) {
	return num1+num2;
};
//SUBTRACT function 
const subtract = function(num1, num2) {
	return num1-num2;
};
//MULTIPLY function
const multiply = function(num1, num2) {
    return num1*num2;
  };
//DIVIDE function 
const divide = function(num1, num2) {
    return num1/num2;
  };

//OPERATE function 
//takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(num1,operator,num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '×': 
        return multiply(num1, num2);
        case '+': 
        return add(num1, num2);
        case '−': 
        return subtract(num1, num2);
        case '÷': 
        return divide(num1, num2);
    }
}



