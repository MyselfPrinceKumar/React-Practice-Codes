const os = require('os')
// console.log(os.arch())
// console.log(os.freemem() / 1024 / 1024 / 1024)
// console.log(os.totalmem() / 1024 / 1024 / 1024)  // gives total ram
console.log(os.hostname())
console.log(os.homedir())


//Event Emmiter in Node js
//Here we check how many times aur api are called

const express = require('express')
const events = require('events')
const app = express()
const eventEmmiter = new events()
let count = 0;
eventEmmiter.on("ApiCount", () => {
    console.log("Api Called  " + count)
    count++
})

app.get('/', (req, res) => {
    res.send("This is the Home")
    eventEmmiter.emit("ApiCount")
})

app.get('/about', (req, res) => {
    res.send("This is the ABout section ")
    eventEmmiter.emit("ApiCount")
})

app.get('/contact', (req, res) => {
    res.send("Please don't hesitate to contact with us")
    eventEmmiter.emit("ApiCount")
})

app.get('/report', (req, res) => {
    res.send("You can Report Here")
    eventEmmiter.emit("ApiCount")
})
app.listen(3000)