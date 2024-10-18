let emailField = document.querySelector("input");
let errorIcon = document.querySelector(".error__icon");
let errorText = document.querySelector(".error__text");
let submit = document.querySelector(".form__submit");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener("click", () => {
  if (emailRegex.test(emailField.value)) {
    errorIcon.classList.remove("active");
    errorText.classList.remove("active");
    let email = emailField.value;
    emailField.value = "";
    // Start AJAX POST Request to send the email
  } else {
    errorIcon.classList.add("active");
    errorText.classList.add("active");
    emailField.value = "";
  }
});
