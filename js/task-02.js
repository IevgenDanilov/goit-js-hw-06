const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUL = document.createElement("ul");


// const IngList = [];
// for (const ingredient of ingredients) {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.textContent = ingredient;
//   // console.log(ingredientItem.textContent);
//   ingredientItem.classList.add("item");
//   // console.log(ingredientItem);
//   IngList.push(ingredientItem);
// }



const IngList = (ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
}));


ingredientsUL.append(...IngList);
console.log(ingredientsUL);


