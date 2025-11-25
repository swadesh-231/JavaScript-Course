let clickButton = document.querySelector(".btn");

let heading = document.querySelector(".heading");
const input_field = document.querySelector("#text");
clickButton.addEventListener("click", (e) => {
  console.log(`clicked`);
});

input_field.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// input_field.addEventListener('')
