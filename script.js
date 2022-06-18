//get all buttons 
const allButtons = document.querySelectorAll('button');
//loop through each button and set it's value as the same as it's content
allButtons.forEach(button => button.setAttribute('value', `${button.textContent}`));

//Get display value 
const displayValue = document.querySelector('#display-value');
//Add an eventListener for each button 
allButtons.forEach(button => button.addEventListener('click', display));

//Display number pressed and solution 
function display() {
    //User enters number, display number on screen 
    displayValue.textContent += this.value;
    let string = displayValue.textContent;

    //if user presses AC, clear value
    const clearButton = document.querySelector('#clear');
    clearButton.onclick = () => {displayValue.textContent = ''};

    //User presses operator, display operator, store as num1, store operator 
    //User enters another number, display on screen
    //user presses operator, display solution of num1 num2, store this as new num1, store new operator 
    //OR user presses =, store num 2, execute operate function, display solution, store solution as num1 
    const equalButton = document.querySelector('#equal');
    equalButton.onclick = () => {
        //how do i identify the operator? includes?
        let operator;
        if (string.includes('+')) {
            operator = '+';
        } else if (string.includes('×')) {
            operator = '×';
        } else if (string.includes('−')) {
            operator = '−';
        } else if (string.includes('÷')) {
            operator = '÷';
        }

        let numArray = string.split(operator);
        let num2 = numArray[1].slice(0,-1);
        let num1 = numArray[0];
        let solution = operate(num1,operator,num2);
        displayValue.textContent = solution;
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