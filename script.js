//get all buttons 
const allButtons = document.querySelectorAll('button');
//loop through each button and set it's value as the same as it's content
allButtons.forEach(button => button.setAttribute('value', `${button.textContent}`));

let initialNum = 0;
let num1 = '';
let string = 0;
let operator = '';
//Get display value 
const displayValue = document.querySelector('#display-value');
displayValue.textContent = `${initialNum}`;
//Add an eventListener for each button 
allButtons.forEach(button => button.addEventListener('click', display));
//store num1 as global variable

function display() {
//variables to think abou t
// 1. the STRING that is being type
// values that I want to store, num1, num2, operator 

    //user presses a number, store value as num1
    //Update 0 to input number and store multiple numbers together 
    string += this.value;
    displayValue.textContent = Number(string);
    //Do not allow user type more digits than the screen can display
    if (string.length == 10) {
        return
    }
    //How does computer know when to stop storing value as num1? 
        //When user presses an operator store num1 as is, and display operator only
        //need to reset string of displayValue  
    switch (this.value) {
        case '+':
            //when this case happens num1 is stored 
            //AS SOON as you press somethign else, num1 is no longer stored 
            num1 = Number(string.slice(0,-1));
            operator = '+';
            displayValue.textContent = operator;
            string = initialNum;
            break
        case '×':
            num1 = Number(string.slice(0,-1));
            operator = '×';
            displayValue.textContent = operator;
            string = initialNum;
            break
        case '−':
            num1 = Number(string.slice(0,-1));
            operator = '−';
            displayValue.textContent = operator;
            string = initialNum;
            break
        case '÷':
            num1 = Number(string.slice(0,-1));
            operator = '÷';
            displayValue.textContent = operator;
            string = initialNum;
            break
    }
    console.log('num1: ' + num1);
    console.log('string is: '+string);
    //if AC is pressed, reset num to 0 
    if (this.value == 'AC') {
        string = 0;
        displayValue.textContent = `${string}`;
    }



}

//functions can't return global variables 

//user presses an operator, stop storing value, store operator 
//user presses another number, store value as num2 
//user presses =, display solution, store solution as num1 

//store number before operator as num1 
const plusButton = document.querySelector('#plus');
plusButton.onclick = () => {
    num1 = 3;
};

// //Display number pressed and solution 
// function display() {
//     //User enters number, display number on screen 
//     displayValue.textContent += this.value;
//     let string = displayValue.textContent;

//     //if user presses AC, clear value
//     const clearButton = document.querySelector('#clear');
//     clearButton.onclick = () => {displayValue.textContent = ''};

//     const equalButton = document.querySelector('#equal');
//     equalButton.onclick = () => {
//         //Identify which operator is selected 


//         //ISSUE only identifies first operator, ignores the rest 
//         let operator;
//         if (string.includes('+')) {
//             operator = '+';
//         } else if (string.includes('×')) {
//             operator = '×';
//         } else if (string.includes('−')) {
//             operator = '−';
//         } else if (string.includes('÷')) {
//             operator = '÷';
//         }

//         //split string 
//         //ISSUE can't handle more numbers
//         let numArray = string.split(operator);
//         //store num1 and 2 
//         let num2 = numArray[1].slice(0,-1);
//         console.log('num2: ' + num2);
//         let num1 = numArray[0];
//         console.log('num1: ' + num1);
//         //calculate solution 
//         let solution = operate(num1,operator,num2);
//         displayValue.textContent = solution;
//     }
//     console.log('string is: '+ string)
// }

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