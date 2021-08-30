const changeColorBtn = document.querySelector(".change-color");
const bodyTarg = document.querySelector("body");

changeColorBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyTarg.style.backgroundColor = color;
  changeColorBtn.textContent = `Selected color: ${color}`;

}
 


