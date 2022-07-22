const User = require('../../../models/userCred');
var bcrypt = require('bcrypt');

const saltRounds = 10;

class LoginRegister {
    #username;

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
            }
            else{
                flag = false;
            }
        }

        //console.log("Row ", user);

        return flag;
    };

    registerUser(usernameInput, passwordInput) {
        // Connect to DB and save user inputs to a new account

        // TODO: Hash password

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
};

module.exports = LoginRegister;