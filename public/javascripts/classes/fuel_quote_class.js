//var con = require("../database")

class FuelQuote {
    #quoteID;
    #fuelRate = 0;
    #fuelAmount = 0;
    #profitMargin = 0;

    constructor(id) {
        /*
        let query = "SELECT * FROM FuelQuote WHERE quoteID = ?";

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */
        
        let rate = result.fuelRate;
        let amount = result.fuelAmount;
        let margin = result.profitMargin;
        
        this.#setFuelRate(rate);
        this.#quoteID(id);
        this.#setFuelAmount(amount);
        this.#setProfitMargin(margin);
    };

    calculateRate(client, profitMargin, gallonsRequested)
    {
        let rate;
        let state;
        let history;

        if(client.getState == true)
        {
            state = 0.8; // Placeholder
        }
        else
        {
            state = 1.2; // Placeholder
        }

        if(client.showQuoteHistory.length > 0)
        {
            history = 0.3; // Placeholder
        }
        else
        {
            history = 1.3; // Placeholder
        }

        rate = profitMargin * gallonsRequested * state * history;

        this.#setFuelRate(rate);

        /*
        let query = "INSERT INTO FuelQuote (fuelRate, fuelAmount, profitMargin) VALUES (?, ?, ?)";
        
        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [rate], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */

        let id = result.insertID;

        this.#setQuoteID(id);

        return this.#fuelRate;
    };

    #setQuoteID(id) {
        this.#quoteID = id;
    };

    #setFuelRate(newRate) {
        this.#fuelRate = newRate;

        /*
        let query = "UPDATE FuelQuote SET fuelRate = ? WHERE fuelQuoteID = $this.quoteID";

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [newRate], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */
    };

    #getFuelRate() {
        return this.#fuelRate;
    };

    #setFuelAmount(newAmount) {
        this.#fuelAmount = newAmount;

        /*
        let query = "UPDATE FuelQuote SET fuelAmount = ? WHERE fuelQuoteID = $this.quoteID";
        
        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [newamount], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */
    };

    #getFuelAmount() {
        return this.#fuelAmount;
    };

    #setProfitMargin(newMargin) {
        this.#profitMargin = newMargin;

        /*
        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [newMargin], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */
    };

    #getProfitMargin() {
        return this.#profitMargin;
    };
};

export default FuelQuote;