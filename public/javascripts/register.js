let username, password, password2;

username = document.getElementById("username");
password = document.getElementById("password");
password2 = document.getElementById("password2")

/*
password2.addEventListener("focusout", () => {
    if(password2.validity.valueMissing)
    {
        password2.setCustomValidity("You must re-enter your password.");
        password2.reportValidity();
        return false;
    }
    if(password.value !== password2.value)
    {
        password2.setCustomValidity("Passwords do not match. Double-check your entry.");
        password2.reportValidity();
        return false;
    }
    if(password.valid && password2.valid)
    {
        return true;
    }
});
*/

function checkFormValid() {
    let formValid = document.forms['loginForm'].reportValidity();
    return formValid;
}