const express = require('express');
require('./Config')
const Product = require('./Schema_Model')
const app = express();

app.use(express.json())
// app.post('/create', async (req, resp) => {

//     const data = new Product(req.body)
//     const result = await data.save();

//     resp.send(result)
//     console.log(result)
// })

//read the data dynamically

// app.get('/list', async (req, resp) => {
//     const data = await Product.find();
//     resp.send(data)
// })

//deleting the data dynamically
// app.delete('/delete/:price', async (req, res) => {
//     const data = await Product.deleteOne(req.params)
//     res.send(data)
//     console.log(req.params)
// })

//Update the data dynamically

// app.put('/update/:_id', async (req, res) => {
//     const data = await Product.updateOne(
//         req.params,
//         req.body
//     )
//     res.send(data)
//     console.log(req.params)
// })

// Searching the data in the database

app.get('/search/:key', async (req, resp) => {
    const data = await Product.find({
        //jo bhi key bheja jayega wo ex array  me search karega jo march karega wo dikha dega
        "$or": [
            { "name": { $regex: req.params.key } },   //jo bhi key bheja jayega wo name me search karega
            { "Job": { $regex: req.params.key } }     //jo bhi key bheja jayega wo Job me search karega
        ]
    })
    console.log(data)
    resp.send(data)
})

app.listen(4000)
