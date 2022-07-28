let username, password, password2;

username = document.getElementById("username");
password = document.getElementById("password");
password2 = document.getElementById("password2");



function checkFormValid() {
  let formValid = document.forms["loginForm"].reportValidity();
  return formValid;
}
