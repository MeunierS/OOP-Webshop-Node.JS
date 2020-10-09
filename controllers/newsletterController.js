//require
const Newsletter = require('../models/Newsletter');


//* Functions
//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {
        email: '',
    };

    //duplicate email
    if (err.code === 11000) {
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

//* POST
module.exports.mail_post = async (req, res) => {
    const {
        email
    } = req.body;
    try {
        const user = await Newsletter.create({
            email
        });
        res.status(201).json({
            newsletter: newsletter._id
        });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({
            errors
        });
    }
}