/*

Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.

*/

// let c;
// c = 50;
// let f = (c * 9) / 5 + 32;

// console.log(f);

function CelToFar(value) {
  let cal = (value * 9) / 5 + 32;
  return cal;
}

const val = 50;
const result = CelToFar(val);

console.log(result);
