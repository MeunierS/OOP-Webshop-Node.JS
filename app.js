//! important delete before push :
//! app.js line 29
//! authController.js line 47
//! authMiddleware.js line 31

//require
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/indexRoutes');
const authRoutes = require('./routes/authRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const cookieParser = require('cookie-parser');
const {
    requireAuth,
    checkUser
} = require('./middleware/authMiddleware');

//MongoDB
const MongoClient = require('mongodb').MongoClient;



//express app
const app = express();

//Connect to MongoDB
//! delete line with db before push

mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//register view engines
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

//routes to pages
app.get('*', checkUser);
app.use(indexRoutes);
app.use(authRoutes);
app.use(newsletterRoutes);

app.get('/about', (req, res) => {

    res.render('about');
});
app.get('/shop', (req, res) => {

    res.render('shop');
});
app.get('/shop-detail', (req, res) => {

    res.render('shop-detail');
});
app.get('/cart', (req, res) => {

    res.render('cart');
});
app.get('/checkout', (req, res) => {

    res.render('checkout');
});
app.get('/my-account', requireAuth, (req, res) => {

    res.render('my-account');
});
app.get('/wishlist', (req, res) => {

    res.render('wishlist');
});
app.get('/gallery', (req, res) => {

    res.render('gallery');
});
app.get('/contact-us', (req, res) => {

    res.render('contact-us');
});

//404 //! Must be last route 
app.use((req, res) => {
    res.status(404).render('404');
});