// Fare Calculation

let age = 12;
let std = true;
let fee = 800;

if (age < 10 && std === true) {
  console.log("Free Your Cost");
} else if (age >= 11 && age <= 25 && std === true) {
  let half_fast = (fee * 50) / 100;
  let basic_fee = fee - half_fast;
  console.log("You Give Money", basic_fee);
} else if (age >= 60) {
  let half_fast = fee * (15 / 100);
  let basic_fee = fee - half_fast;
  console.log("You Give Money", basic_fee);
} else {
  console.log("You Give Full Money", fee);
}
