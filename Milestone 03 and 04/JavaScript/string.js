// // Emon Hossain Hira

// // let First_Name = "Madil";
// // let Middle_Name = "Islam";
// // let Last_Name = "Nabid";

// // console.log(First_Name+" "+Middle_Name+" "+Last_Name);

// let array = ["Emon","Hossain","Hira"];
// console.log(array.splice(1,3,"Akbar"));
// console.log(array);
// // console.log(array.join(" "));

// // console.log(array[0].length);
// // console.log(array[0].toLowerCase());
// // console.log(array[0].toUpperCase());

// // if(array.includes("Emon")) console.log("true");
// // else console.log("NO");

// // console.log(array[0].slice(1,3));

// const a = "  Emon Hossain Hira  ";
// // const b = "Emon Hossain Hira";

// // if(a.trim()===b.trim()) console.log("Yes");
// // else console.log("No");

// // console.log(a.slice(4,7));
// console.log(a.indexOf("z"));

// console.log(array.splice(1,3,"Akbar"));

// // console.log(a.length);
// // console.log(b.length);

// // if(a===b) console.log("Yes");
// // else console.log("No");

// String Declaration
// const a = `Emon Hossain Hira`;
// const b = "Emon Hossain Hira";
// const c = "Emon Hossain Hira";
// const d = new String("Demra");

// console.log(a);
// console.log(b[0]);
// console.log(c.length);
// console.log(d);

// String is immutable

// const word = "Dhaka";
// word[0] = "L";
// console.log(word, word[0]);

// String Operation
// index length tolowercase touppercase trim join includes slice substring substr split reverse

// const e = "Emon Hossain Hira";
// const f = "Damn Boy";

// console.log(e.toLowerCase());
// console.log(e.toUpperCase());

// console.log(e.concat(f));

// const list = "Emon Hossain Hira";

// console.log(list.split("-"));

// console.log(list.slice(13, 17));

// let Emon = ["Hira", "Hossain", "Akbar", "Hossain"];

// console.log(Emon.reverse());

// console.log(Emon);

// Emon[0] = "Emon";

// console.log(Emon.splice(2, 1, "Riyad"));
// console.log(Emon);
// console.log(Emon.push("Hasina"));
// console.log(Emon);
// console.log(Emon.pop());

//

// const word = " Emon Hossain Hira ";

// // console.log(word.split(" "));
// console.log(word.replace("Emon", "EMON"));

// console.log("At Function", word.at(50)); // index value check and no value return 0 index value
// console.log("Index of Function", word.indexOf()); // index value check and no value return -1
// console.log("CharAt Function", word.charAt(50)); // index check
// console.log("Count Character", word.length); // char length
// console.log("Count Char use trim", word.trim().length); // remove whitespece
// console.log("Includes Function word", word.includes("E")); // find value
// if (
//   word.trim().toUpperCase().includes("EMON") && // toUppercase includes
//   word.trim().toUpperCase().startsWith("E") && // to Uppercase startswidth
//   word.trim().toLowerCase().endsWith("a") // to endwith trim to lowercase check
// )
//   console.log("Yes Everythink correct");
// else console.log("Yes anyone correct");

//  Array String

const StrArray = ["Emon", "Hossain", "Hira", "EH", "EH Hira", "EHH"];
const val = StrArray.length; // Lenth Check
const a = StrArray.indexOf("Emon"); // index check
const b = StrArray.splice(0, 2, "WWE", "RAW"); // Detete Item index lastindex insertvalue
const c = StrArray.length; // Length check
console.log(val, a, b, c, StrArray);

const d = [].concat(StrArray);
console.log(d, StrArray.join(" "));

console.log(d.sort());
