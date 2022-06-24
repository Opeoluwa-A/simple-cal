
const operator = prompt("Pick an operator (+, -, *, /)");
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));


let answer;

if (operator === " + ") {
  answer = num1 + num2;

}
else if (operator === " - ") {
  answer = num1 - num2;

}
else if (operator === " * ") {
  answer = num1 * num2;

}
else if (operator === " / ") {
  answer = num1 / num2;
}
else {
  answer = ("Invalid input");
}

alert(`${num1} ${operator} ${num2} = ${answer}`)