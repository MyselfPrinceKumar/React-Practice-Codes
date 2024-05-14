const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
require('dotenv').config();
const app = express();
const PORT = 4000;
mongoose.connect('mongodb://127.0.0.1:27017/E-commerce');

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('Connection error:', error);
});
db.once('open', () => {
    console.log("Connected to the Database");
});
// Middlewares 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "My Secret Key",
    saveUninitialized: true,
    resave: false
}));
app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});
app.use(express.static('uploads'))
// Set Template Engine
app.set('view engine', "ejs");
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
//Route Prefix
app.use("", require('./routes/routes'))
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
