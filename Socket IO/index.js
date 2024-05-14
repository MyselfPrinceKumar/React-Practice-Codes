const app = require('express')()
const http = require('http').Server(app)
const path = require('path')
const dirname = path.join(__dirname)
console.log(dirname)

const io = require('socket.io')(http)


let count = 0;
let roomno = 1;
let full = 0;
io.on('connection', (socket) => {
    count++;
    // socket.emit('newUser', ("Welcome To You"))  //new user shows welcome to you and others shows count users are Connected
    // socket.broadcast.emit('newUser', (`${count} Users are connected`))

    //Creating Rooms In socket IO
    socket.join("room" + roomno);
    io.sockets.in("room" + roomno).emit("roomChat", "You Are Connected to the Room." + roomno);
    full++;
    //this is the indecated that only 3 users can connected to the room for chating 
    if (full >= 3) {
        full = 0;
        roomno++;
    }
    console.log("Connetction Established")
    socket.on('disconnect', () => {
        // count--;
        // socket.broadcast.emit('newUser', (`${count} Users are connected`))
        //It sends the messages to the every users except new User
        // console.log("Disconnected")
    })
    //sending messages from server/backend to front-end/client

    // setTimeout(() => {
    //     //send is the inbuilt event jisko recieve krne liye ke liye message likte h
    //     // socket.send(
    //     //     {
    //     //         name: "Prince kumar",
    //     //         Roll: 27,
    //     //         Motherland: "Bihar",
    //     //         Job: "MERN Developer"
    //     //     }  
    //     // )

    //     //this is the custom event created by emit
    //     //client or server side both side can be used this emit method to send the data
    //     socket.emit('myEvent', "this is the custom Event ")
    // }, 2000)
    //catching the data which is coming from the client side
    // socket.on('customEvent', (data) => {
    //     console.log(data.msg)
    // })


    //It is Used for the globally broadcasting event in socket io

    // io.sockets.emit('broadcast', { msg: count + "Users Are Connected" })
})



app.get('/', (req, res) => {
    res.sendFile(`${dirname}/index.html`)
})
app.get('/home', (req, res) => {
    console.log("bhag bhosdiwala")
    res.send("Chodne Bhi nii dete")
})

http.listen(3301, () => {
    console.log("server ready on the port 3301")
})