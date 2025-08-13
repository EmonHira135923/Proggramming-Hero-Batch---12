/*

Problem 4: Reverse a String
Description:
Given a string s, print its reverse.

Input:
One string s.

Output:
The reversed string.

Constraints:
1 ≤ length of s ≤ 1000

Sample Input:
hello

Sample Output:
olleh

*/

function ReverseString(word) {
  let rev = word.split("").reverse().join("");
  return rev;
}

let Word = "Emon Hossain Hira";
let ans = ReverseString(Word);
console.log(ans);

// let myname = "Emon Hossain Hira";

// let ans = myname.split("").reverse().join(" ");

// console.log(ans);
