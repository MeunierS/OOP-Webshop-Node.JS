//require
const express = require('express');
const morgan = require('morgan');

//MongoDB
const MongoClient = require('mongodb').MongoClient;
//! insert line with db access here
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("dbtest").collection("users");
  // perform actions on the collection object
  client.close();
});

//express app
const app = express();

//register view engines
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

//link to pages
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/index', (req, res) => {

    res.render('index');
});
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