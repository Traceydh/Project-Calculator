//get all buttons 
const allButtons = document.querySelectorAll('button');
//loop through each button and set it's value as the same as it's content
allButtons.forEach(button => button.setAttribute('value', `${button.textContent}`));

let initialNum = 0;
let num1 = '';
let num2 = '';
let string = 0;
let operator = '';
//Get display value 
const displayValue = document.querySelector('#display-value');
displayValue.textContent = `${initialNum}`;
//Add an eventListener for each button 
allButtons.forEach(button => button.addEventListener('click', display));
//store num1 as global variable

function display() {
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
            //why does num1 store 3 after a number is entered after pressing operator?
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

    //User enters next number, store this as num2 
    num2 = Number(string);
    console.log('num2: ' + num2);
    //When user presses =, perform the operator function 


    console.log(`num1 is: ${num1}`);
    console.log('string is: '+string);
    //if AC is pressed, reset num to 0 
    if (this.value == 'AC') {
        string = 0;
        displayValue.textContent = `${string}`;
    }



}

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