//require
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/indexRoutes');
const authRoutes = require('./routes/authRoutes');
//MongoDB
const MongoClient = require('mongodb').MongoClient;



//express app
const app = express();

//Connect to MongoDB
//! delete line with db before push
<<<<<<< HEAD

=======
const dbURI = 
>>>>>>> refs/remotes/origin/master
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//register view engines
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(morgan('dev'));

//routes to pages
app.use(indexRoutes);
app.use(authRoutes);

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
app.get('/my-account', (req, res) => {

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

//404
app.use((req, res) =>{
    res.status(404).render('404');
});
