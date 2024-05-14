const express = require('express')
const app = express()


const reqFilter = (req, res, next) => {
    // console.log("requestFilter");
    if (!req.query.age) {
        res.send("Enter your Age")
    }
    else if (req.query.age < 18) {
        res.send("Only 18+ Age Can see the Message")
    }
    else {
        next();
    }
}
// app.use(reqFilter)   // It sets the above middleware on the all routes

app.get('/', (req, res) => {
    res.send("<h1>This is the Home Page</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>This is the About Page</h1>")
})

app.get('/user', reqFilter, (req, res) => {  //we can apply middleware on a perticular route
    res.send("<h1>This is the User Page</h1>")
})
app.listen(5000)
