const form = document.querySelector("#contact-form form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form submission

  // Clear old errors
  document.querySelectorAll(".error").forEach((el) => el.remove());

  let isValid = true;

  // Helper to show error message
  function showError(input, message) {
    isValid = false;
    const error = document.createElement("p");
    error.className = "error text-red-600 text-sm mt-1";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
  }

  // GET INPUT ELEMENTS
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const dob = document.getElementById("dob");
  const address = document.getElementById("address");
  const gender = form.querySelector("input[name='gender']:checked");
  const language = form.querySelector("select");
  const file = form.querySelector("input[type='file']");

  // VALIDATION RULES
  if (name.value.trim().length < 3) {
    showError(name, "Name must be at least 3 characters long");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    showError(email, "Enter a valid email address");
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
  }

  if (!gender) {
    showError(form.querySelector("input[name='gender']"), "Select gender");
  }

  if (!dob.value) {
    showError(dob, "Select a valid date");
  }

  if (address.value.trim().length < 10) {
    showError(address, "Address must be at least 10 characters long");
  }

  if (language.value === "--- Choose your language ---") {
    showError(language, "Please select a language");
  }

  if (file.files.length === 0) {
    showError(file, "Please upload a file");
  }

  // Final check
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
