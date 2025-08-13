/*

Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/

var numbers = ["Tom", "Tim", "Tin", "Tik"];

let word_add = [];
for (let num of numbers) {
  word_add += num;
}

console.log(word_add);
