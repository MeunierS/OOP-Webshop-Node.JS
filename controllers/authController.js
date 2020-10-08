//require
const User = require('../models/User');

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {
        email: '',
        pwd: ''
    };
    //duplicate email
    if (err.code === 11000){
        errors.email = 'That email is already in use';
        return errors;
    }

    //validation error
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({
            properties
        }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}
//* GET
module.exports.signup_get = (req, res) => {
    res.render('signup');
}
module.exports.login_get = (req, res) => {
    res.render('login');
}

//* POST
module.exports.signup_post = async (req, res) => {
    const {
        email,
        pwd
    } = req.body;
    try {
        const user = await User.create({
            email,
            pwd
        });
        res.status(201).json(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({
            errors
        });
    }
}
module.exports.login_post = async (req, res) => {
    const {
        email,
        pwd
    } = req.body;
    console.log(email, pwd);
    res.send('user login');
}