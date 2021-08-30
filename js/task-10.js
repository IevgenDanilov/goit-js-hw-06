const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const dataCreateBtn = document.querySelector('[data-create]');
const dataDestroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector("input");


// Запуск створення блоків по кліку на відповідну кнопку
dataCreateBtn.addEventListener("click", createBoxes);

input.addEventListener("input", (event) => {
  const amount = event.currentTarget.value;
});


if (input.textContent === "") => {return ``;};

// let amount = 20;
// console.log(input.getValue());

// let amount = input.value();

function createBoxes(amount) {

      // Область кліку = кнопка

      // if (dataCreateBtn.target.nodeName !== "BUTTON") {
      //   return;
      // }

      // 
      const boxes = [];

      for (let i = 1; i <= amount; i++) {
        const bgColor = getRandomHexColor();
        const box = document.createElement("div");
        // box.style.display = flex;
        // box.style.flexDirection = column;
        box.style.backgroundColor = bgColor;
        box.style.width += 10;
        box.style.height += 10;
        boxes.push(box);
      }
  
      // console.log(...boxes);

  }



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// ------------------------

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }

//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }