// Task - 04

// FriendShip

let Y_mark = 80;
let F_mark = 39;

if (Y_mark >= 80) {
  if (F_mark >= 80) {
    console.log("Go For Lunch");
  } else if (F_mark < 80 && F_mark >= 60) {
    console.log("Good Luck Next Time");
  } else if (F_mark < 60 && F_mark >= 40) {
    console.log("Keep Msg Unseen");
  } else {
    console.log("Block My Friend");
  }
} else {
  console.log("Back To Home and Like react sad");
}
