const mongoose = require("mongoose");


const hostSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

const hostModel = new mongoose.model("Collection-User", hostSchema);

module.exports = hostModel;