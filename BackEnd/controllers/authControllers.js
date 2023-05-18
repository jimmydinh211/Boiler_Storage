const userModel = require("../models/userModel");

module.exports.getSignUp = (req, res) => {
    res.send(`Welcome ${req.body.email}!`)
}
module.exports.getLogin = (req, res) => {
    res.send(`Welcome ${req.body.email}!`)
}
module.exports.postSignUp = async (req, res) => {
    const { email, password, firstName, lastName} = req.body
    
    await userModel.insertMany([{email, password, firstName, lastName}])
    res.send(`Welcome ${req.body.email}!`)
}
module.exports.postLogin = async (req, res) => {
    try {
        const match = await userModel.findOne({email: req.body.email})
        if (match.password === req.body.password) {
            res.send({success: true})
        } else {
            res.send({success: false})
        }
    } catch (err) {
        console.log(err)
        res.send("Invalid credentials")
    }
}