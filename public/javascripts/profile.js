import Profile from "./classes/profile_management_class.js";

function testProfile () {
    let profile = new Profile;

    let name, phone, email, state, inState;

    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    state = document.getElementById("state").value;

    if(state === "texas")
    {
        inState = true;
    }
    else
    {
        inState = false;
    }


    profile.editProfile(name, phone, email. inState);
}

document.getElementById("submit-button").addEventListener('click', event => {
    
    testProfile();
    alert("Quote successfully submitted!");
});