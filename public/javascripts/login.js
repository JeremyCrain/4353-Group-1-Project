import LoginRegister from "./classes/login_register_class";


function testLogin(event) {

    console.log("Testing registration...");

    let username, password;

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    console.log(username + " " + password);

    let user = new LoginRegister;

    let loginSuccessful = user.loginUser(username, password);

    if(!loginSuccessful)
    {
        event.preventDefault();
    }
};

document.getElementById("submit-button").addEventListener("click", event => {
    testLogin(event);
})

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
        
    }
});
