/*

Task-3:
Write a function to count the number of vowels in a string.

*/

function CountVowel(value) {
  let cnt = 0;
  for (i = 0; i < word.length; i++) {
    if (
      value[i].toLowerCase().includes("a") ||
      value[i].toLowerCase().includes("e") ||
      value[i].toLowerCase().includes("i") ||
      value[i].toLowerCase().includes("o") ||
      value[i].toLowerCase().includes("u")
    ) {
      cnt++;
    }
    // console.log(value);
  }
  return cnt;
}

let word = "Emon";
let result = CountVowel(word);
console.log(result);
