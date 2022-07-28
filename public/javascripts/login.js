let username = document.getElementById("username");
let form = document.getElementById("loginForm");
let error = document.getElementById("error");


form.onsubmit = async (event) => {
    event.preventDefault();
  
    let userurl = "http://localhost:3000/userInfo/" + username.value;
    console.log("Username: " + username.value);
  
    let user = await fetch(userurl)
      .then((res) => res.json());
  
    console.log(user);
  
    if(user.length == 0) {
      
      error.innerText = "Error: Username or password incorrect. Please try again.";
      form.reset();
    }
    else
    {
      form.submit();
    }
  };