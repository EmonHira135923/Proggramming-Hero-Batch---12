/*

Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90


*/

const obj_arr = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

// console.log(obj_arr[0].name, "scored", obj_arr[0].marks);

for (let value of obj_arr) {
  console.log(value.name, "scored", value.marks);
}
