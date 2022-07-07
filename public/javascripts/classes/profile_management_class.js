var con = require("../database");

class Profile {
    #idNumber
    #profileName;
    #phoneNumber;
    #emailAddress;
    #inState;
    #quoteHistory;

    constructor(id) {
        this.#setID(id);


        /*
        let query = "SELECT * FROM Clients WHERE clientID = ?";

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [id], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });

        let name, phone, email, state, history;

        name = result.name;
        phone = result.phoneNumber;
        email = result.emailAddress;
        state = result.state;
        */

        this.#setProfileName(name);
        this.#setPhone(phone);
        this.#setEmail(email);
        this.#setState(state);

        // GET all quote numbers associated with this client from DB
        /*
        query = "SELECT fuelquoteID FROM FuelQuote WHERE FuelQuote.clientID = $this.#getID";

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */

        result.fuelquoteID.forEach(quote => {
            this.#setQuoteHistory(quote);
        });

    };

    editProfile(name, phone, email, state) {
        // Retrieve new values from form then save to DB.

        /*
        let query = "UPDATE Clients SET (name, phoneNumber, emailAddress, state) VALUES (?, ?, ?, ?)";

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [name, phone, email, state], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */

        this.#setProfileName(name);
        this.#setPhone(phone);
        this.#setEmail(email);
        this.#setState(state);
    };

    showQuoteHistory() {
        // Retrieve quote info from DB

        let history = this.#getQuoteHistory();
        

        

        history.forEach(quote => {
            // GET quote information from DB and display it
            /*
            let query = "SELECT * FROM FuelQuote WHERE fuelquoteID = ?";

            con.connect(function(err) {
                if (err) throw err;
                con.query(query, [quote], function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                });
            });
            */
            
            // TODO: Display to table

        });
    };

    getID() {
        return this.#idNumber;        
    };

    #setProfileName(newName) {
        this.#profileName = newName;
    };

    #getProfileName() {
        return this.#profileName;
    };

    #setPhone(newPhone) {
        this.#phoneNumber = newPhone;
    };

    #getPhone() {
        return this.#phoneNumber;
    };

    #setEmail(newEmail) {
        this.#emailAddress = newEmail;
    };

    #getEmail() {
        return this.#emailAddress;
    };

    #setState(newState) {
        this.#inState = newState;
    };

    #getState() {
        return this.#inState;
    };

    setQuoteHistory(quoteNumber) {
        this.#quoteHistory.push(quoteNumber);
    };

    getQuoteHistory() {
        return this.#quoteHistory;
    };

}

export default Profile;