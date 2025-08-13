/*
*Task 4 (Hard)
    Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

    Input: const statement = 'I am a hard working person'

    Output:

    'person working hard a am I'
 */

const statement = "I am a hard working person";

let rev = statement.split(" ");
let rev_arr = [];

for (let i = rev.length - 1; i >= 0; i--) {
  rev_arr.push(rev[i]);
}

console.log(rev_arr.join(" "));
