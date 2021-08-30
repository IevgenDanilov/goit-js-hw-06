const changeColor = document.querySelector(".color");
const bodyTarg = document.querySelector("body");
const  changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyTarg.style.backgroundColor = color;
  changeColor.textContent = `Selected color: ${color}`;

}
 


