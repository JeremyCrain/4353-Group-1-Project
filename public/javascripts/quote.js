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
      console.log(user[0].quote_history);
      user = user[0];

      if (user.address != undefined) {
        address.value = user.address;
      }
    }
 

let total = document.getElementById("total");
let req = document.getElementById("galreq");
let rate = document.getElementById("rate");
let button = document.getElementById("getQuote");
let error = document.getElementById('error');
let form = document.getElementById('quoteForm');
let current_price = 1.50 ;
let profit_factor = 0.1;
let location = 'texas';
let location_factor,history_factor;
console.log("user",user.state);
if(user.state == location){
  location_factor=0.02;
}
if(user.state != location) {
  location_factor=0.04;
}
if(!user.quote_history.length){
  history_factor=0;
}
if(user.quote_history.length){
  history_factor=0.01;
}
if(req.value<=1000){
  gallon_factor=0.03;
}
if(req.value>1000){
  gallon_factor=0.02;
}


let flag = false;

button.addEventListener("click", () => {
  margin=(location_factor - history_factor + gallon_factor + profit_factor)*current_price;
  rate.value=current_price+margin;
  total.value =Math.round((req.value * rate.value)*100)/100;
  flag = true;
  button.innerText = "Update Quote";
  error.innerHTML = "";
});

req.addEventListener('keyup', () => {
  flag = false;
})

form.onsubmit = (event) => {
  if(!total.value || flag == false)
  {
    event.preventDefault();
    error.innerHTML = "Please click " + button.innerText + " before submitting your request.";
    return false;
  }
  else {
    console.log('Submitting form...');
    console.log(total.value);
    return true;
  }
};

});

// Fetch rate
//const pricingurl = "http://localhost:3000/profileInfo/" + userParam;
