/*

Problem 2: Check Even Number
Description:
Given an integer n, determine whether it is even.

Input:
One integer n.

Output:
Print "YES" if n is even, else "NO".

Constraints:
-10^9 ≤ n ≤ 10^9

Sample Input:
5

Sample Output:
NO


*/

function even_value(a) {
  if (a % 2 === 0) return "YES";
  else return "NO";
}

let c = 25;

let even_check = even_value(c);

console.log(even_check);
