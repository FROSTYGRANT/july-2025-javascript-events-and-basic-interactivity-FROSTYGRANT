// ======================
// Part 1: Event Handling
// ======================
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});

// ======================
// Part 2: Interactive Features
// ======================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// ======================
// Part 3: Form Validation
// ======================
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const successMessage = document.getElementById("formSuccess");

  let isValid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";

  // Validate name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    successMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});