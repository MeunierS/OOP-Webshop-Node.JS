const { isInteger } = require('lodash');
//require
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    pseudo: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
}, { timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;