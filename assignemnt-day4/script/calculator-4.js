console.log("calculator")

let number1 = prompt("Enter number First:", 0);

let number2 = prompt("Enter number Seconds:", 0);

console.log("Enter Number First:", number1)
console.log("Enter Number Seconds:", number2)


let addition = +number1 + +number2;

let substraction = number1 - number2;

let Mult = number1 * number2;

let division = number1  / number2;

let sqrtnum1 = Math.sqrt(number1);
let sqrtnum2 = Math.sqrt(number2);

let percent = (number1 / number2) *100;

console.log(`Addition of ${number1} & ${number2} is:`, +addition);
console.log(`Substraction of ${number1} & ${number2} is:`, +substraction);
console.log(`Multiplication of ${number1} & ${number2} is:`, +Mult);
console.log(`division of ${number1} & ${number2} is:`, +division);
console.log(`Square root of ${number1} is`, Math.round(+sqrtnum1));
console.log(`Square root of ${number2} is:`, +sqrtnum2);
console.log(`percent of ${number1} & ${number2} is:`, +percent);
