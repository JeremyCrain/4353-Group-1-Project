let userParam = window.location.href;
let index = userParam.lastIndexOf("/");
userParam = userParam.substring(index + 1);

document.getElementById("quoteForm").action = "/quote/" + userParam;
document.getElementById("profileLink").href = "/editProfile/" + userParam;
document.getElementById("quoteLink").href = "/quote/" + userParam;
document.getElementById("historyLink").href = "/quoteHistory/" + userParam;

const userurl = "http://localhost:3000/profileInfo/" + userParam;

fetch(userurl)
  .then((res) => res.json())
  .then((user) => {
    console.log("Loading user info...");
    if (user.length > 0) {
      console.log(user[0]);
      user = user[0];

      if (user.address != undefined) {
        address.value = user.address;
      }
    }
  });

let total = document.getElementById("total");
let req = document.getElementById("galreq");
let rate = document.getElementById("rate");
let button = document.getElementById("getQuote");
let error = document.getElementById('error');
let form = document.getElementById('quoteForm');

button.addEventListener("click", () => {
  total.value = req.value * rate.value;
});

form.onsubmit = (event) => {
  if(!total.value)
  {
    event.preventDefault();
    error.innerHTML = "Please click Get Quote before submitting your request.";
    return false;
  }
  else {
    console.log('Submitting form...');
    console.log(total.value);
    event.submit();
    return true;
  }
};

// Fetch rate
//const pricingurl = "http://localhost:3000/profileInfo/" + userParam;
