// second task
// BMI Calculation

let weight = 50;
let height = 5.4;
height *= 0.3048;

let BMI_calculation = weight / (height * height);

if (BMI_calculation < 18.5) {
  console.log("You Are UnderWeight and your BMI - ", BMI_calculation);
} else if (BMI_calculation >= 18.5 && BMI_calculation <= 24.9) {
  console.log("You Are Normal and your BMI - ", BMI_calculation);
} else if (BMI_calculation >= 25 && BMI_calculation <= 29.9) {
  console.log("You Are Overweight and your BMI - ", BMI_calculation);
} else {
  console.log("You Are Obese and your BMI - ", BMI_calculation);
}
