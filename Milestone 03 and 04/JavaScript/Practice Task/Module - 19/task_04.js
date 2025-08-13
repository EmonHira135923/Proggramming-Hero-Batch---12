/*

Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

*/

function LengthWord(value) {
  let result = value.split(" ");
  //   let res = Math.max(result);
  //   return res;
  let res = "";
  for (let word of result) {
    if (word.length > res.length) {
      res = word;
    }
  }
  return res;
}

let word = "Emon Hossain Hira";
let ans = LengthWord(word);
console.log(ans);
