import FuelQuote from "./classes/fuel_quote_class.js";

function testPricingModule() {
        
    // Hardcode user ID/state/history/address; Retrieve from DB

    let profitMargin = 1.2;
    let history = [1,2,3];
    let state = true;
    let address = "4800 Calhoun Rd. Houston, TX 77004"

    let quote = new FuelQuote;

    console.log("Calculating rate");

    let rate = quote.calculateRate(profitMargin, state, history);

    console.log("Rate" + rate);
    
    document.getElementById("rate").value = rate;
    document.getElementById("address").value = address;

    return rate;
};

let calculatedRate = testPricingModule();

document.getElementById("galreq").addEventListener('keyup', event => {
    
    let request = event.target.value;

    let totalDue = request * calculatedRate;

    document.getElementById("total").value = totalDue;
});

document.getElementById("submit-button").addEventListener('click', event => {
    alert("Quote successfully submitted!");
});
