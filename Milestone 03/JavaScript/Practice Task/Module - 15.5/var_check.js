/*

. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.



*/

const value = "Emon Hossain Hira";
const list = ["Emon", "Hossain", "Hira"];

if (Array.isArray(value)) console.log("This is Array");
else console.log("This is not Array");

if (Array.isArray(list)) console.log("This is Array");
else console.log("This is not also array");
