//var con = require("../database")

class LoginRegister {
    #username;
    #password;

    loginUser(usernameInput, passwordInput) {
        // Connect to DB and check username & password vs inputs
        let pass;
        /*
        let query = "SELECT password FROM Clients WHERE username = ?";

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [usernameInput], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });

        pass = result.password;
        */

        if(passwordInput === pass)
        {
            this.#setUserName(usernameInput);
            this.#setPassword(pass);
            return true;
        }
        else
        {
            return false;
        }
    }

    registerUser(usernameInput, passwordInput) {
        // Connect to DB and save user inputs to a new account

        /*
        let query = "INSERT INTO Clients (username, password) VALUES (?, ?)";

        // TODO: Hash the password

        con.connect(function(err) {
            if (err) throw err;
            con.query(query, [usernameInput, passwordInput], function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            });
        });
        */

        this.#setPassword(passwordInput);
        this.#setUserName(usernameInput);
        
        return;    
    }

    #setUserName(newName) {
        this.#username = newName;
    }

    #getUserName() {
        return this.#username;
    }

    #setPassword(newPass) {
        this.#password = newPass;
    }

    #getPassword() {
        return this.#password;
    }

}

export default LoginRegister;