/*

Problem 3: Maximum of Two Numbers
Description:
Given two integers a and b, return the maximum.

Input:
Two integers separated by space.

Output:
One integer — the maximum of a and b.

Constraints:
-10^9 ≤ a, b ≤ 10^9

Sample Input:
15 20

Sample Output:
20

*/

function MaxValue(a, b) {
  if (a > b) return a;
  else return b;
}

let e, f;
(e = 50), (f = 60);

let mx_value = MaxValue(e, f);

console.log(mx_value);
