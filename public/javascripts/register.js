let username, password, password2, form;

username = document.getElementById("username");
password = document.getElementById("password");
password2 = document.getElementById("password2");
form = document.getElementById("registerForm");

password.addEventListener("keydown", () => {
  error.innerText = "";
});

password2.addEventListener("keydown", () => {
  error.innerText = "";
})

form.onsubmit = async (event) => {
  event.preventDefault();

  let userurl = "http://localhost:3000/userInfo/" + username.value;
  console.log("Username: " + username.value);

  let user = await fetch(userurl)
    .then((res) => res.json());

  console.log(user);

  if(user.length > 0) {
    
    error.innerText = "Error: Username already in use. Please try again.";
    form.reset();
  }
  else if(password.value != password2.value)
  {
    error.innerText = "Error: Passwords do not match. Please try again.";
  }
  else
  {
    form.submit();
  }
};