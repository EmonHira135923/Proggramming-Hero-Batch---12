/*

Problem 5: Count Vowels in String
Description:
Given a string s, count the number of vowels (a, e, i, o, u — case insensitive).

Input:
One string s.

Output:
One integer — count of vowels.

Constraints:
1 ≤ length of s ≤ 1000

Sample Input:
Emon

Sample Output:
2

*/

function Countvowel(word) {
  let cnt = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i].toLowerCase() === "a" ||
      word[i].toLowerCase() === "e" ||
      word[i].toLowerCase() === "i" ||
      word[i].toLowerCase() === "o" ||
      word[i].toLowerCase() === "u"
    ) {
      cnt++;
    }
  }
  return cnt;
}

let res = "ooooo  00000 lkre";

let ans = Countvowel(res);
console.log(ans);
