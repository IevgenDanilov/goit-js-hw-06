const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


nameInput.addEventListener("input", (event) => {
    nameOutput.textContent = "my dear friend";
    if (event.currentTarget.value !== "") {nameOutput.textContent = event.currentTarget.value};

});