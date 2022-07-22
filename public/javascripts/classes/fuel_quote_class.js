import Client from "../../../models/client.js";

class FuelQuote {
    #userID = 0;
    #quoteID = 0;
    #fuelRate = 0;
    #fuelAmount = 0;
    #profitMargin = 0;
    #deliveryDate;
    #address;

    constructor(quoteID)
    {
        // GET quote info from DB


        /*
        let userID, rate, amount, margin, deliveryDate, address;
        
        this.#setQuoteID(quoteID);
        this.#setUserID(userID);
        this.#setFuelRate(rate);
        this.#setFuelAmount(amount);
        this.#setProfitMargin(margin);
        this.#setDeliveryDate(deliveryDate);
        this.#setAddress(address);
        */

    }

    calculateRate(profitMargin, inState, history)
    {
        let rate;
        let stateRate;
        let historyRate;

        console.log(profitMargin + inState + history);

        if(inState == true)
        {
            stateRate = 0.8; // Placeholder
        }
        else
        {
            stateRate = 1.2; // Placeholder
        }

        if(history.length > 0)
        {
            historyRate = 0.3; // Placeholder
        }
        else
        {
            historyRate = 1.3; // Placeholder
        }

        rate = profitMargin * stateRate * historyRate;

        this.setFuelRate(rate);
        this.setProfitMargin(profitMargin);

        return rate;
    };

    setUserID(newid) {
        this.#userID = newid;
    };

    getUserID() {
        return this.#userID;
    };

    setDeliveryDate(newDate) {
        this.#deliveryDate = newDate;
    };

    getDeliveryDate() {
        return this.#deliveryDate;
    };

    setAddress(newAddress) {
        this.#address = newAddress;
    }

    getAddress() {
        return this.#address;
    };

    setQuoteID(id) {
        this.#quoteID = id;
    };

    getQuoteID() {
        return this.#quoteID;
    };

    setFuelRate(newRate) {
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

    getFuelRate() {
        return this.#fuelRate;
    };

    setFuelAmount(newAmount) {
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

    getFuelAmount() {
        return this.#fuelAmount;
    };

    setProfitMargin(newMargin) {
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

    getProfitMargin() {
        return this.#profitMargin;
    };
};

//export default FuelQuote;
module.exports = FuelQuote;