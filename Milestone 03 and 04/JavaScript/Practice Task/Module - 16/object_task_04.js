/*

Task-4
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

*/

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

// let count = 0;

// for (let value in student) {
//   console.log(student[value]);
// }

// console.log(count);

let cnt_value = Object.keys(student);

console.log(cnt_value.length);
