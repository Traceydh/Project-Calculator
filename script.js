//get all buttons 
const allButtons = document.querySelectorAll('button');
//loop through each button and set it's value as the same as it's content
allButtons.forEach(button => button.setAttribute('value', `${button.textContent}`));

let initialNum = 0;
let initialNumMultiplication = 1;
let num1 = '0';
let num2 = '0';
let string = 0;
let operator = '';
let solution = '';
//Get display value 
const displayValue = document.querySelector('#display-value');
displayValue.textContent = `${initialNum}`;
//Add an eventListener for each button 
allButtons.forEach(button => button.addEventListener('click', display));
//store num1 as global variable

function display() {
        //Do not allow user type more digits than the screen can display
    if (string.length == 10) {
        return
    }
//user presses a number, store value as num1
    //Update 0 to input number and store multiple numbers together 
    string += this.value;
    displayValue.textContent = Number(string);
    //How does computer know when to stop storing value as num1? 
        //When user presses an operator store num1 as is, and display operator only
        //need to reset string of displayValue  
        //num2 is 
    switch (this.value) {
        case '+':
            console.log('string: ' + string);
            //stored number entered as num1
            num2 = Number(string.slice(0,-1));
            //store operator clicked
            operator = '+';
            //add num1 and num2 together 
            console.log(num1, operator, num2);
            solution = operate(num1, operator, num2);
            //make num2 = solution 
            num1 = solution;
            //reset string 
            string = initialNum;
            displayValue.textContent = solution;
            console.log('solution: '+ solution);
            break
            //ERROR returns 0 
        case '×':
            num1 = Number(string.slice(0,-1));
            operator = '×';
            solution = operate(num1, operator, num2);
            num2 = solution;
            string = initialNum;
            displayValue.textContent = solution;
            console.log('solution: '+ solution);
            break
        case '−':
            //error: since num2 is stored as solution, numbers are not subtracting in the correct order
            num2 = Number(string.slice(0,-1));
            operator = '−';
            console.log(num1, operator, num2);
            solution = operate(num1, operator, num2);
            num1 = solution;
            string = initialNum;
            displayValue.textContent = solution;
            console.log('solution: '+ solution);
            break
        case '÷':
            //ERROR divides by 0 
            num1 = Number(string.slice(0,-1));
            operator = '÷';
            solution = operate(num1, operator, num2);
            num2 = solution;
            string = initialNum;
            displayValue.textContent = solution;
            console.log('solution: '+ solution);
            break
    }

    //User enters next number, store this as num2 
    //When user presses =, perform the operate function, display solution, reset string
    if (this.value == '=') {
        num2 = solution; 
        num1 = Number(string.slice(0,-1));
        solution = operate(num1,operator,num2);
        displayValue.textContent = solution;
        string = solution;
        //reset num2 back to 0, otherwise it will add num2 to num1 when operator is
        num1 = 0;
    }

    //if AC is pressed, reset num to 0 
    if (this.value == 'AC') {
        string = 0;
        num1 = 0;
        num2 = 0;
        solution = 0;
        displayValue.textContent = `${string}`;
    }
}
//ERRORS: when you press the operator, besides +, it produces incorrect answer because it computes it with num1=0 in the beginning 
//User types num1, store 
//user types operator, store 
//user types num2, store 
//user types = or operator, compute solution and display 


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