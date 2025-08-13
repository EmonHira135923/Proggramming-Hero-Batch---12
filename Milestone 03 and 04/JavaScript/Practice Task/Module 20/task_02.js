/*

Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/

function LowestName(value) {
  let heights = value[0].length;
  for (let i = 1; i < value.length; i++) {
    if (value.length < heights) {
      heights = value[i];
    }
  }
  return heights;
}

let res = LowestName(["Emon", "Hossain", "Hira"]);
console.log(res);
