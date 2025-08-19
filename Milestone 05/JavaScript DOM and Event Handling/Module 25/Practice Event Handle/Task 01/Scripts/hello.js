// <button id="Red">Make Me Red</button>
// <button id="Green">Make Me Green</button>
// <button id="Blue">Make Me Blue</button>
// <button id="Purple">Make Me Purple</button>
// <button id="Yellow">Make Me Yellow</button>

const ChangeColor = document.getElementById("btn-work");

function BackGroundColor(value) {
  const Red = document
    .getElementById("Red")
    .addEventListener("click", function () {
      document.body.style.backgroundColor = "Red";
    });
  const Green = document
    .getElementById("Green")
    .addEventListener("click", function () {
      document.body.style.backgroundColor = "Green";
    });
  const Blue = document
    .getElementById("Blue")
    .addEventListener("click", function () {
      document.body.style.backgroundColor = "Blue";
    });
  const Purple = document
    .getElementById("Purple")
    .addEventListener("click", function () {
      document.body.style.backgroundColor = "Purple";
    });
  const Yellow = document
    .getElementById("Yellow")
    .addEventListener("click", function () {
      document.body.style.backgroundColor = "Yellow";
    });
}

BackGroundColor(ChangeColor);
