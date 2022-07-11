//import LoginRegister from "./classes/login_register_class.js";

function testRegister(event) {

    let username, password, password2;

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    console.log(username + " " + password + " " + password2);

    if(password === password2)
    {
        //res.send("NOT IMPLEMENTED: Register user POST");

        // TODO: Hash PW and POST into DB
        
        //res.redirect('/fuelquote/editProfile');
        location.reload();
        
    }
    else
    {
        document.getElementById("error-msg").style.opacity = 1;
        
    }
};

document.getElementById("username").addEventListener("input", event => {
    if(document.getElementById("username").validity.valueMissing)
    {
        document.getElementById("username").setCustomValidity("Please enter a username.");
        document.getElementById("username").reportValidity();
    }
});

document.getElementById("password").addEventListener("input", event => {
    if(document.getElementById("password").validity.valueMissing)
    {
        document.getElementById("password").setCustomValidity("Please enter a password.");
        document.getElementById("password").reportValidity();
    }
});

document.getElementById("password2").addEventListener("input", event => {
    if(document.getElementById("password2").validity.valueMissing)
    {
        document.getElementById("password2").setCustomValidity("You must re-enter your password.");
        document.getElementById("password2").reportValidity();
    }
});

document.getElementById("password2").addEventListener('keyup', event => {
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

document.getElementById("password").addEventListener('keyup', event => {
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