let name = prompt("What is your name?");
const operator = prompt("Enter an operator +, -, /, *");
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));


let Answer;

if (operator === "+") {
  Answer = number1 + number2;

}
else if (operator === "-") {
  Answer = number1 - number2;

}
else if (operator === "*") {
  Answer = number1 * number2;

}
else if (operator === "/") {
  Answer =number1 / number2;
}
else  {
  Answer = ("In valid input");
}

alert(` ${name} your answer is ${number1} ${operator} ${number2} =${Answer}`)