/**
 * 
Task 5
    Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

    Input: [1, 2, 3]

    Expected Output:

    Original: [1, 2, 3] Copy: [99, 2, 3]
 */

// const array_copy = [99, 2, 3];
// const copy_array = array.concat(array_copy);
// array[0] = 99;

const array = [1, 2, 3];
const copy_array = [].concat(array);

console.log("Orginal Array:", array, "Copy Array:", copy_array);
