/*

Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

*/

// const laptop = 35000;
// const tablet = 45000;
// const mobile = 200000;

// if (laptop > tablet && laptop > mobile) {
//   console.log("YES Laptop is price is high");
// } else if (tablet > laptop && tablet > mobile) {
//   console.log("YES Tablet is price is high");
// } else {
//   console.log("YES Mobile is price is high");
// }

function calculateElectronicsBudget(laptop, tablet, mobile) {
  let sum = laptop + mobile + tablet;
  return sum;
}

const laptop = 25000;
const tablet = 15000;
const mobile = 5000;

const res = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(res);
