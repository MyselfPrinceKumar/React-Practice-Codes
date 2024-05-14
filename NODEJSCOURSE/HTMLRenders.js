// const express = require('express')
// const path = require('path')

// const app = express()
// const dirPath = path.join(__dirname, 'HTMLRender')

// app.use(express.static(dirPath))

// app.listen(4000)
// console.log(dirPath)
//jis file ka name index.html rehta h wo by default render ho jata h

//rendering html files without extensions

// app.get('/', (req, res) => {
//     res.sendFile(`${dirPath}/index.html`)
// })
// app.get('/home', (req, res) => {
//     res.sendFile(`${dirPath}/home.html`)
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${dirPath}/about.html`)
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${dirPath}/noPage.html`)
// })

// app.listen(4000)

// How to use ejs template engine 
const express = require('express')
const path = require('path')
const app = express()
const dirPath = path.join(__dirname, 'HTMLRender')
app.set("view engine", 'ejs')

app.get('/profile', (req, res) => {
    const data = {
        name: "prince kumar",
        gMail: "pk3978591@gmail.com"
    }
    // res.render("profile")
    res.render("profile", { data })
})
app.get('/', (req, res) => {

    res.sendFile(`${dirPath}/about.html`)
})
app.listen(5000)
