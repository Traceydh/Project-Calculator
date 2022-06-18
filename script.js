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
    //clear display when AC is clicked 
    displayValue.textContent += this.value;
    if (this.value == 'AC') {
        displayValue.textContent = '';
    }
    let string = displayValue.textContent;
    //user enters num1 
    //when operator is clicked, store num1
    const plusButton = document.querySelector('#plus')
    let num1;
    plusButton.onclick = () => {
        num1 = string.slice(0,-1);
        console.log(num1);
    }
    //store operator 
    //clear screen, user enters store num2 
    //user press =, clear screen, display solution 

    
    //display solution 
    // When = button is pressed active operate function 
    const equal = document.querySelector('#equal');
    equal.onclick = () => {
        //console.log(operate(num1, operator, num2))
    };
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
