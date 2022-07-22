import Client from "../../../models/client.js";
import FuelQuoteDoc from "../../../models/fuelquote.js";

class Profile {
    #idNumber
    #profileName;
    #phoneNumber;
    #emailAddress;
    #inState;
    #quoteHistory;

    constructor(id) {
        this.setID(id);

        let result = Client.findOne({
            _id: id
        });


        let name, phone, email, state, history;

        name = result.name;
        phone = result.phoneNumber;
        email = result.emailAddress;
        state = result.state;
        history = result.quote_history;

        this.setProfileName(name);
        this.setPhone(phone);
        this.setEmail(email);
        this.setState(state);


        result.quote_history.forEach(quote => {
            this.setQuoteHistory(quote);
        });

    };

    editProfile(name, phone, email, state) {


        this.setProfileName(name);
        this.setPhone(phone);
        this.setEmail(email);
        this.setState(state);
    };

    showQuoteHistory() {
        // Retrieve quote info from DB

        let history = this.getQuoteHistory();
        
        let client = new Client({
            _id: this.id
        });
        

        client.quote_history.forEach(quote => {            
            // TODO: Display to table

            let quoteDoc = FuelQuoteDoc.findOne({
                _id: quote
            });

        });
    };

    setID(newID) {
        this.#idNumber = newID;        
    };

    getID() {
        return this.#idNumber;        
    };

    setProfileName(newName) {
        this.#profileName = newName;
    };

    getProfileName() {
        return this.#profileName;
    };

    setPhone(newPhone) {
        this.#phoneNumber = newPhone;
    };

    getPhone() {
        return this.#phoneNumber;
    };

    setEmail(newEmail) {
        this.#emailAddress = newEmail;
    };

    getEmail() {
        return this.#emailAddress;
    };

    setState(newState) {
        this.#inState = newState;
    };

    getState() {
        return this.#inState;
    };

    setQuoteHistory(quoteNumber) {
        this.#quoteHistory.push(quoteNumber);
    };

    getQuoteHistory() {
        return this.#quoteHistory;
    };

}

//export default Profile;
module.exports = Profile;