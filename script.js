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
        case '*': 
        return multiply(num1, num2);
        case '+': 
        return add(num1, num2);
        case '-': 
        return subtract(num1, num2);
        case '/': 
        return divide(num1, num2);
    }
}

console.log(operate(2,'*',4));
