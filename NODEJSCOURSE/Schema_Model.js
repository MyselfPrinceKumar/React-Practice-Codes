const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Village: String,
    Job: String
})

module.exports = new mongoose.model("products", productSchema)