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

//Display number user clicks
numberButton.forEach(button => button.addEventListener('click', (e) => {
    numberFunction(e.target.textContent);
} ));

function numberFunction(number) {
    //only allow user to enter numbers up to display size 
    if (currentNum.length >= 14) {
        return
    //only allow user to enter one period 
    } else if (number === '.' && currentNum.includes('.')) {
        return
    //only allow user to enter one number after decimal point 
        //split string, count length after decimal place
    } else if (currentNum.toString().includes('.') && currentNum.toString().split('.')[1].length > 0) {
        return;
    //if currentNum is 0, add number to it instead of concatenating, from deleteButton function
    } else if (currentNum === 0) {
        currentNum += Number(number);
    } else {
        currentNum += number;
    }
    currentDisplay.textContent = currentNum; 
  
}

//operator buttons,there are three scenarios which should do different things
operatorButton.forEach(button => button.addEventListener('click', (e) => {
    //if 1 + op, if there is no previousNum this is the first equation, store current num as previousNum and operator
    if (previousNum === '') {
        previousNum = currentNum;
        storeOperatorPreviousDisplay(e.target.textContent);
    //if user tries to divide by 0 with an operator
    } else if (previousDisplay.textContent.includes('÷') && currentNum == 0) {
        alert('pls stop don\'t divide by 0, who knows what will happen...');
        currentDisplay.textContent = currentNum;
        currentNum = '';
        return
    //if 1 + 2 = 3 op, if i press the operator now, solution should be stored as previousNum, new operator stored, waiting for currentNum 
    } else if (previousDisplay.textContent.includes('=')) {
        solution = Number(solution.toFixed(4));
        previousNum = currentNum;
        storeOperatorPreviousDisplay(e.target.textContent);
    //If 1 + 2 op, work out solution and store as previous num, store new operator 
    } else if (previousNum !== '' && !previousDisplay.textContent.includes('=')) {
        //display solution 
        solution = operate(previousNum, operator, currentNum);
        solution = Number(solution.toFixed(4));
        previousNum = solution;
        storeOperatorPreviousDisplay(e.target.textContent);
    }
    }
 ));

function storeOperatorPreviousDisplay(op) {
    operator = op;
    previousDisplay.textContent = previousNum + ' ' + operator;
    currentNum = '';
}

//perform operator on current and previous number 
equalButton.onclick = () => {
    //if no previous or current number don't respond 
    if (currentNum === '' || previousNum === '') {
        return
    }
    //don't let user divide by 0
    else if (operator === '÷' && currentNum == '0') {
        alert('pls stop don\'t divide by 0, who knows what will happen...');
        currentDisplay.textContent = currentNum;
        currentNum = '';
        return
    }
    makeSolution()
}

//execute operate button
    //e.g.1 + 2 = 3, - store solution as previousNum and display solution
function makeSolution() {
    //display solution 
    solution = operate(previousNum, operator, currentNum);
    previousDisplay.textContent = `${previousNum} ${operator} ${currentNum} = `;
        //display up to 4 decimal places if required 
    solution = Number(solution.toFixed(4));
    currentDisplay.textContent = solution;
    //store solution as previousNum
    previousNum = solution;
    currentNum = solution;
}

//clear everything
clearButton.onclick = clear;
//clear function 
function clear() {
    currentNum = '';
    previousNum = '';
    operator = '';
    solution = '';
    currentDisplay.textContent = '0';
    previousDisplay.textContent = '';
}

//Delete one digit from current display and current Number 
deleteButton.onclick = deleteBtn;
//Delete function 
function deleteBtn() {
    //if equal sign has been used, every time delete is pressed remove one digit, until there are no more digits then return 0
    if (previousDisplay.textContent.includes('=')) {
        currentNum = currentNum.toString();
        if (currentNum.length > 1) {
            currentNum = currentNum.slice(0,-1);
        } else {
            currentNum = 0; 
        }
    //delete solution when 1 + 2 = 3 delete will delete 3, make it zero
    } else {
        currentNum = currentDisplay.textContent;
        if (currentNum.length > 1) {
            currentNum = currentNum.slice(0,-1);
        } else {
            currentNum = 0; 
        }
    }
    currentDisplay.textContent = currentNum;
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

//Keyboard support 
//when someone hits a key on the keyboard it will do the same thing as clicking on button 
window.addEventListener('keydown', function(e){
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);
    //console.log(key.textContent);
    //stop function running if invalid key is pressed 
    if (!key) {
        return
    } else if (e.keyCode == 8) {
        deleteBtn();
    }
    //when number is pressed, display number on screen 
    switch (key.textContent) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            numberFunction(key.textContent);
            break;
    }

    //When operator is pressed, execute operator functions 

})

