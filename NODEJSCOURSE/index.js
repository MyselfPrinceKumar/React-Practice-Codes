// const dm=require('./dummy')   //way to import variabloes and functions from diffnt files
// const fs = require('fs');
// console.log("hello")
// console.log(dm.x+dm.y)
// console.log(dm.z())
// fs.writeFileSync("hello.txt", "bhag ja saar")  // used to created a text file

// const data = require("./data");

// const http = require('http');
// http.createServer(function (req, res) {   //server created
//     res.write("<h1>hello bhosdiwalo kaha ho</h1>");
//     res.end();  //end the server
// }).listen(4000)   //open localhost:4000 to see the output

// const col = require('colors');
// console.log("Hello Bachcho".yellow)    //using the colors package


// const data = require('./data')   //import data from another file
// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' })   //200 is the status for okk,we can take any status code here
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(3000);

//Taking input from command Line

// console.log(process.argv[2]);

// creating file with command line input
// const fs = require('fs');
// const input = process.argv;
// if (input[2] === 'add') {
//     fs.writeFileSync(input[3], input[4]);  //create the file 2nd input is add
// }
// else if (input[2] === 'remove') {
//     fs.unlinkSync(input[3]);               //create the file 2nd input is add
// }
// else {
//     console.log("Invalid Input");
// }

//Make files in a folder
// const fs = require('fs');
// const path = require('path');

// // console.log(path.join(__dirname, 'file'))
// const dirPath = path.join(__dirname, 'File')   //it gives the directory of the file

// for (i = 1; i <= 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, "this is the hello file")
//     // fs.writeFileSync(dirPath + "/bsdk" + i + ".txt", "this is the hello file")  //Both are same
// }

// fs.readdir(dirPath, (err, files) => {     //gives the ifles name in the given directories
//     // for (i = 0; i < files.length; i++) {
//     //     console.log(files[i])

//     // }

//     // using forEach loop
//     files.forEach(Element => {
//         console.log(Element)
//     })
// })


// CRUD OPERATION IN NODE.JS

// const fs = require('fs');
// const path = require('path');

// fs.writeFileSync(`${path.join(__dirname, 'CRUD')}/Orange.txt`, 'this is the created file Orange Casidy ')   //file apple is created

// fs.readFile(`${path.join(__dirname, 'CRUD')}/apple.txt`, 'utf8', (err, item) => {    //read  the content of the penticular file
//     console.log(item)
//     console.log(item.length)
//     console.log(item.replace("this", "those"))
//     console.log(item.charAt(2))
// })

// fs.appendFile(`${path.join(__dirname, 'CRUD')}/apple.txt`, ' this is the appended message', (err) => {
//     if (!err) {
//         console.log("File is Updated")  //this adds the data messages
//     }
// })

// fs.unlinkSync(`${path.join(__dirname, 'CRUD')}/Orange.txt`)  //deletes the perticular file from the given directory


// fs.rename(`${path.join(__dirname, 'CRUD')}/Lund.txt`, `${path.join(__dirname, 'CRUD')}/Fruits.txt`, (err) => {
//     if (!err) {
//         console.log("File Name is Updated")  //Rename the file name of the given directoris
//     }
// })

//How to solve Asyncronous Drawbacks

// let a=12;
// let b=23;

// setTimeout(()=>{
//     b=34;
// },2000);

// console.log(a+b);  // it gives 35 answer which is wrong due to asynchronous nature of node js
// //We can solve this issue by using callbacks or async await or promises

// let a = 10;
// let b = 20;
// let wait = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     }, 2000)
// })
// wait.then((data) => {
//     b = data;
//     console.log(a + b);
// })
// wait.catch((rej) => {
//     console.log(rej)
// })

//  Routing With Express Js
const express = require('express');
const app = express();

app.get('', (req, res) => {
    // res.send("Hello This is Prince Rock");
    // console.log(req.query.name)   
    // res.send("The data send by the browser is " + req.query.name)  //we can't sent two response at a time
    //How to render html in Your Page
    res.send(`
    <h1 style="background-color: powderblue">This is the heading of the Home page</h1>
    <a href='/about'>Go to About</a>
    `)
})
app.get('/about', (req, res) => {
    res.send(`This is the About Page Bro So be in Your Limit 
    <a href='/'>Go to Home</a>
    `)
})
app.get('/contact', (req, res) => {
    res.send("Do Not try to Contact This is Bihar")
})
app.get('*', (req, res) => {
    res.send("404");
})

app.listen(3000);
