/*

Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0



*/

const number = [10, 20, 30, 40, 50, 50, 60];

let cnt = 0;

let find = 50;
// let bool = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] === find) {
    cnt++;
  }
  //   if (number.includes(find)) {
  //     bool = true;
  //     cnt++;
  //     break;
  //   }
}

if (cnt === 0) console.log(find, "No value Here", cnt);
else console.log(find, "Yes value Here", cnt);
// if (bool === true) console.log("YES", cnt);
// else console.log("NO", cnt);
