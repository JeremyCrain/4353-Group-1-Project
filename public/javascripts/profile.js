fname = document.getElementById("fname");
lname = document.getElementById("lname");
phone = document.getElementById("phone");
email = document.getElementById("email");
address = document.getElementById("address");

let userParam = window.location.href;
let index = userParam.lastIndexOf("/");
userParam = userParam.substring(index + 1);

document.getElementById("profileForm").action =
  "/editProfile/" + userParam;


document.getElementById('profileLink').href = "/editProfile/" + userParam;
document.getElementById('quoteLink').href = "/quote/" + userParam;
document.getElementById('historyLink').href = "/quoteHistory/" + userParam;
  

console.log(userParam);

const userurl = "http://localhost:3000/profileInfo/" + userParam;

fetch(userurl)
  .then((res) => res.json())
  .then((user) => {
    console.log("Loading user info...");
    if (user.length > 0) {
      console.log(user[0]);
      user = user[0];
      if (user.first_name != undefined) {
        fname.value = user.first_name;
      }
      if (user.last_name != undefined) {
        lname.value = user.last_name;
      }
      if (user.phone_number != undefined) {
        phone.value = user.phone_number;
      }
      if (user.email_address != undefined) {
        email.value = user.email_address;
      }
      if (user.address != undefined) {
        address.value = user.address;
      }
    }
  });
