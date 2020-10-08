//require
const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
      email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    } ,
    pwd: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum length required is 8 characters']
    }

});

const User = mongoose.model('user', userSchema);
module.exports = User;