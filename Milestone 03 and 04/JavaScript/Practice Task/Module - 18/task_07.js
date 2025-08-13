/*

Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]

*/

const two_d_arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const copy_2_arr = [].concat(two_d_arr);
copy_2_arr[1][0] = 99;

console.log(copy_2_arr);
