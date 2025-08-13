/*
Task 1:

    Write a JavaScript code to reverse the array colors without using the reverse method.

    Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

    Output:

    ['orange', 'yellow', 'green', 'blue', 'red']

*/

// Answer Question ::

const colors = ["red", "blue", "green", "yellow", "orange"];

// let col_ans = colors.reverse().join(" ");
// let col_ans = colors.reverse();

// let word = [];

// for (let col of colors) {
//   word.unshift(col);
// }

const rev = [];
for (let i = colors.length - 1; i >= 0; i--) {
  rev.push(colors[i]);
}

// console.log(col_ans);
// console.log(word);
console.log(rev.join(" "));
