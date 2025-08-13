/*

Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

*/

function LowestValue(value) {
  let min = value[0];
  for (let i = 1; i < value.length; i++) {
    if (value[i] < min) {
      min = value[i];
    }
  }
  return min;
}

const heights2 = [120, 145, 785, 986, 120, 654, 258, 963, 357];

const result = LowestValue(heights2);

console.log(result);
