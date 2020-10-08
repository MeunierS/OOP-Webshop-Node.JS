//require
const User = require('../models/User');

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
   try{
    const user = await User.create({email, pwd});
    res.status(201).json(user);
   }
   catch(err){
    console.log(err);
    res.status(400).send('error, user not created');   
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