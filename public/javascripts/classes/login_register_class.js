const User = require('../../../models/userCred');
var bcrypt = require('bcrypt');

const saltRounds = 10;

class LoginRegister {
    #username;
    #id;

    async loginUser(usernameInput, passwordInput) {
        // Connect to DB and check username & password vs inputs
        let flag;

        let user = await User.findOne({
            username: usernameInput,
        });


        if(!user)
        {
            console.log("User not found");
            flag = false;
        }
        else
        {
            let match = await bcrypt.compare(passwordInput, user.password);

            if(match)
            {
                flag = true;
                this.setUserName(usernameInput);
                this.setID(user._id);
            }
            else{
                flag = false;
            }
        }

        return flag;
    };

    registerUser(usernameInput, passwordInput) {
        // Connect to DB and save user inputs to a new account

        bcrypt.hash(passwordInput, saltRounds, async function(err, hash) {
            if(err) {
                res.send("Error: Hashing password failed.")
            }
            let newUser = new User({
                username: usernameInput,
                password: hash,
            });
    
            await newUser.save();
        });
    };

    setUserName(newName) {
        this.#username = newName;
    }

    getUserName() {
        return this.#username;
    }

    setID(newID) {
        this.#id = newID;
    }

    getID() {
        return this.#id;
    }
};

module.exports = LoginRegister;