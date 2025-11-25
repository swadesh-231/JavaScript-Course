const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please enter a valid height!";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please enter a valid weight!";
    return;
  }

  // BMI Formula: weight (kg) / [height (m)]^2
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  let message = "";

  if (bmi < 18.6) {
    message = `Under Weight 😟 (BMI: ${bmi})`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = `Normal Weight 🙂 (BMI: ${bmi})`;
  } else {
    message = `Over Weight 😥 (BMI: ${bmi})`;
  }

  results.innerHTML = message;
});
