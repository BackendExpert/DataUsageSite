const User = require("../Models/User");

const AccountController = {
    ViewAccounts: async (req, res) => {
        try{
            const AccVIew = await User.find()
            return res.json({ Result: AccVIew })
        }
        catch(err) {
            console.log(err)
        }
    }
};

module.exports = AccountController;