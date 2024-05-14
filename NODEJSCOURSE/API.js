const express = require('express')
const dbConnect = require('./MongoDB_Connection')
const app = express()
//Using get api method to show the data of mongodb file
// app.get('/', async (req, res) => {
//     const data = await dbConnect()
//     const result = await data.find().toArray()
//     res.send(result)
// })

//POST api method taking data from postman
app.use(express.json())
// app.post('/', async (req, res) => {
//     console.log(req.body)
//     // res.send({ name: "Prince Rock", Role: "MERN Developer" })
//     // res.send(req.body)


//     //inserting data into mongodb from postman   
//     const data = await dbConnect();   
//     const result = await data.insertOne(req.body)
//     res.send(result)
// })

//Put api method to apdate the data

app.put('/', async (req, res) => {
    const data = await dbConnect()
    //delete bhi aise hi kam karta h Almost
    const result = data.updateOne({ Roll: 4 }, { $set: { Status: "Data Engineer" } })  //updated by  Data engineer
    // const result = data.updateOne({ Roll: 4 }, { $set: req.body }) updated by postman data
    res.send(req.body)
})

app.listen(5000)
