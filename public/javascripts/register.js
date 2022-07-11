const { default: LoginRegister } = require("./classes/login_register_class");

function testRegister(event) {

    let username, password, password2;

    console.log("Testing registration...");

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    console.log(username + " " + password + " " + password2);

    let user = new LoginRegister;

    user.registerUser(username, password);
};

document.getElementById("submit-button").addEventListener("click", event => {
    testRegister(event);
});


document.getElementById("username").addEventListener("input", () => {
    if(document.getElementById("username").validity.valueMissing)
    {
        document.getElementById("username").setCustomValidity("Please enter a username.");
        document.getElementById("username").reportValidity();
    }
});

document.getElementById("password").addEventListener("input", () => {
    if(document.getElementById("password").validity.valueMissing)
    {
        document.getElementById("password").setCustomValidity("Please enter a password.");
        document.getElementById("password").reportValidity();
    }
});

document.getElementById("password2").addEventListener("input", () => {
    if(document.getElementById("password2").validity.valueMissing)
    {
        document.getElementById("password2").setCustomValidity("You must re-enter your password.");
        document.getElementById("password2").reportValidity();
    }
});

document.getElementById("password2").addEventListener('keyup', () => {
    //console.log("Testing passwords");
    
    
    let pass = document.getElementById("password").value;
    let pass2 = document.getElementById("password2").value;

    //console.log(pass2);

    if(pass === pass2)
    {
        document.getElementById("error-msg").style.opacity = "0";
    }
    else
    {
        document.getElementById("error-msg").style.opacity = "1";
    }
});

document.getElementById("password").addEventListener('keyup', () => {
    //console.log("Testing passwords");
    
    
    let pass = document.getElementById("password").value;
    let pass2 = document.getElementById("password2").value;

    //console.log(pass2);

    if(pass === pass2)
    {
        document.getElementById("error-msg").style.opacity = "0";
    }
    else
    {
        document.getElementById("error-msg").style.opacity = "1";
    }
});