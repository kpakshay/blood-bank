const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloodSchema = new Schema({
    bloodgroup: {
        type: String,
        required: true,
        enum: ["A+","A-","B+","B-","AB+","AB-","O+","O-"]
    },
    quantity: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }   
})

const Blood = mongoose.model('Blood', bloodSchema, 'blood');
module.exports = Blood;