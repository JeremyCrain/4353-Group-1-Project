import Client from "../../../models/client.js";

class FuelQuoteHistory extends FuelQuote {
    #quoteNumber;

    constructor(quoteNum)
    {
        this.#quoteNumber = quoteNum;
    };

    saveQuote(userID, fuelAmount, fuelRate) {
        // Connect to DB and create a new quote with fields: Client's ID Number, fuel amount requested, fuel rate
        let clientID = Client.findById();
        let quote;

        /*
        let query = "INSERT INTO FuelQuote (clientID, fuelAmount, fuelRate) VALUES (?, ?, ?)"

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [clientID, fuelAmount, fuelRate], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });


        quote = result.insertID;
        */

        this.#quoteNumber = quote;
        clientID.setQuoteHistory(quote);

        return this.#quoteNumber;
    };

    retrieveQuote(quote) {
        // Connect to DB and retrieve fuel rate and fuel amount requested based on given quote ID.
        let rate, amount;

        /*
        let query = "SELECT fuelRate, fuelAmount FROM FuelQuote WHERE fuelQuoteID = ?";

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [quote], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */

        return [rate, amount, date, address];
    };


};

//export default FuelQuoteHistory;
module.exports = FuelQuoteHistory;