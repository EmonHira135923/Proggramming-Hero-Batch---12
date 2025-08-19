const Red = document.getElementById("Red");
function Makered() {
  document.body.style.backgroundColor = "Red";
}

const green = document.getElementById("Green");
// console.log(green.innerText);
green.onclick = function MakeGreen() {
  document.body.style.backgroundColor = "Green";
};

const White = document
  .getElementById("White")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "White";
  });

const Yellow = document
  .getElementById("Yellow")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "Yellow";
  });

const dark = document
  .getElementById("Dark")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "Black";
  });
