let userParam = window.location.href;
let index = userParam.lastIndexOf("/");
userParam = userParam.substring(index + 1);

document.getElementById("profileLink").href = "/editProfile/" + userParam;
document.getElementById("quoteLink").href = "/quote/" + userParam;
document.getElementById("historyLink").href = "/quoteHistory/" + userParam;

const userurl = "http://localhost:3000/profileInfo/" + userParam;
let quoteurl = "http://localhost:3000/quoteInfo/" + userParam;

// GET user quote history from DB

fetch(userurl)
  .then((res) => res.json())
  .then((user) => {
    console.log("Loading user info...");
    if (user.length > 0) {
      console.log(user[0]);
      user = user[0];

      user.quote_history.forEach((quoteID) => {
        let quoteurl = "http://localhost:3000/quoteInfo/" + quoteID;
        fetch(quoteurl)
          .then((res) => res.json())
          .then((quote) => {
            console.log("Loading quote...");
            console.log(quote);
            quote = quote[0];

            let cellDate,
              date,
              cellAmount,
              amountRequested,
              cellRate,
              fuelRate,
              deliveryAddress,
              cellAdd,
              cellTotal,
              total;

            let row = document.createElement("tr");
            cellDate = document.createElement("td");
            cellAdd = document.createElement("td");
            cellAmount = document.createElement("td");
            cellRate = document.createElement("td");
            cellTotal = document.createElement("td");

            amountRequested = document.createTextNode(quote.amount_requested);
            deliveryAddress = document.createTextNode(quote.delivery_address);
            date = document.createTextNode(quote.date_requested.slice(0, 10));
            fuelRate = document.createTextNode(quote.fuel_rate);
            total = document.createTextNode(quote.total_cost);

            cellAmount.appendChild(amountRequested);
            cellAdd.appendChild(deliveryAddress);
            cellDate.appendChild(date);
            cellRate.appendChild(fuelRate);
            cellTotal.appendChild(total);
        
            
            row.appendChild(cellAmount);
            row.appendChild(cellAdd);
            row.appendChild(cellDate);
            row.appendChild(cellRate);
            row.appendChild(cellTotal);

            console.log(row);

            document.getElementById("historyTable").append(row);
          });
      });
    }
  });
