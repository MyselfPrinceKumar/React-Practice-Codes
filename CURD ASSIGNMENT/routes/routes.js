const express = require('express');
const router = express.Router();
const User = require('../models/users'); // Change 'users' to 'User'
const multer = require('multer');
// const users = require('../models/users'); // This line is unnecessary
// Image Uploads
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname); // Use file.fieldname instead of file.filename
    },
});
var upload = multer({
    storage: storage,
}).single('image');

// Insert a User into the database route
router.post('/add', upload, (req, resp) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.filename,
    });

    user.save() // save() returns a promise
        .then(() => {
            req.session.message = {
                type: 'success',
                message: 'User Added Successfully'
            };
            resp.redirect('/'); // Redirect to home page or any other appropriate route
        })
        .catch(error => {
            resp.json({ message: error.message, type: 'danger' });
        });
});
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(deletedUser => {
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found', type: 'danger' });
            }
            res.json({ message: 'User deleted successfully', type: 'success' });
        })
        .catch(error => {
            res.status(500).json({ message: error.message, type: 'danger' });
        });
});

// Get all the users route

router.get('/', (req, resp) => {
    User.find().exec() // Remove the callback function
        .then(users => { // Use then() to handle the result
            resp.render("index", {
                title: "Home Page",
                users: users
            });
        })
        .catch(err => { // Handle errors
            resp.json({ message: err.message });
        });
});
router.get("/add", (req, res) => {
    res.render("add_users", { title: "Add Users" });
});
router.get("/about", (req, res) => {
    // res.render("about", { title: "Add Users" });
    res.render("about", { title: "Add Users" });
});
router.get("/contact", (req, res) => {
    res.render("contact", { title: "Add Users" });
});

module.exports = router;
