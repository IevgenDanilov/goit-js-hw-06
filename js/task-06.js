const validationInput = document.querySelector("#validation-input");


validationInput.addEventListener("blur", () => {

    const dataLength = +validationInput.dataset.length;

    console.log(dataLength);
    console.log(validationInput.value.length);

  if (validationInput.value.length === dataLength) 
  {validationInput.classList.remove("invalid");
  validationInput.classList.add("valid")}
  
  else {validationInput.classList.remove("valid");
  validationInput.classList.add("invalid");}
  
});


