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
const previousDisplay = document.querySelector('#previousDisplay');

//VARIABLES 
// 

//Apply display number function for numbers 
numberButton.forEach(button => button.addEventListener('click', (e) => {
    numberFunction(e.target.textContent);
} ));

function numberFunction(number) {
    currentNum += number;
    currentDisplay.textContent = currentNum;
}

//operator buttons. What do i want it to do?
operatorButton.forEach(button => button.addEventListener('click', (e) => {
    operatorFunction(e.target.textContent);
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

equalButton.onclick = () => {
    console.log(previousNum, operator, currentNum);
    solution = operate(previousNum, operator, currentNum);
    previousDisplay.textContent = previousNum + ' ' + operator + ' ' + currentNum;
    currentDisplay.textContent = solution;
    previousNum = solution;
    currentNum  = '';
}

clearButton.onclick = () => {
    
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
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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

// let initialNum = 0;
// let num1;
// let num2;
// let num;
// let string = '0';
// let operator = '';
// let solution = '';
// let test = '';
// test = string;

//Add eventListener for opeartor buttons 
//store num1 as global variable

// function display() {
//     Do not allow user type more digits than the screen can display
//     if (string.length == 10) {
//         return
//     }
// user presses a number, store value as num1
//     Update 0 to input number and store multiple numbers together 
//     string += this.value;
//     console.log('string: ' + string);
//     displayValue.textContent = Number(string);
//     How does computer know when to stop storing value as num1? 
//         When user presses an operator store num1 as is, and display operator only
//         need to reset string of displayValue  
//         num2 is 
//     switch (this.value) {
//         case '+':
//             console.log('string: ' + string);
//             stored number entered as num1
//             num2 = Number(string.slice(0,-1));
//             store operator clicked
//             operator = '+';
//             add num1 and num2 together 
//             console.log(num1, operator, num2);
//             solution = operate(num1, operator, num2);
//             make num2 = solution 
//             num1 = solution;
//             reset string 
//             string = initialNum;
//             displayValue.textContent = solution;
//             console.log('solution: '+ solution);
//             break
//             ERROR returns 0 
//         case '×':
//             num1 = Number(string.slice(0,-1));
//             operator = '×';
//             solution = operate(num1, operator, num2);
//             num2 = solution;
//             string = initialNum;
//             displayValue.textContent = solution;
//             console.log('solution: '+ solution);
//             break
//         case '−':
//             User enters number, How do i know when the number as ended? When the human presses the operator 
//             num1 = Number(string.slice(0,-1));
//             User enters operator, store
//             operator = '−';
//             string = '';
//             displayValue.textContent = (num1);
//                 check if there is num1 and num2 that can be applied
//             if (num2 == undefined || num1 == undefined) {
//                 console.log('not defined');
//             } else {
//                 num2 = string.replace('5', '');
//                 console.log('num1 and num2 exist');
//             }
//             break
//         case '÷':
//             ERROR divides by 0 
//             num1 = Number(string.slice(0,-1));
//             operator = '÷';
//             solution = operate(num1, operator, num2);
//             num2 = solution;
//             string = initialNum;
//             displayValue.textContent = solution;
//             console.log('solution: '+ solution);
//             break
//     }

//     User enters next number, store this as num2 
//     When user presses =, perform the operate function, display solution, reset string
//     if (this.value == '=') {
//         num2 = solution; 
//         num1 = Number(string.slice(0,-1));
//         solution = operate(num1,operator,num2);
//         displayValue.textContent = solution;
//         string = solution;
//         reset num2 back to 0, otherwise it will add num2 to num1 when operator is
//         num1 = 0;
//     }

//     if AC is pressed, reset num to 0 
//     if (this.value == 'AC') {
//         string = 0;
//         num1 = 0;
//         num2 = 0;
//         solution = 0;
//         displayValue.textContent = `${string}`;
//     }

//     Delete one digit if delete is pressed 
//     if (this.value == 'Delete') {
//         string = string.slice(0,-7);
//         displayValue.textContent = Number(string);
//     }
// }


