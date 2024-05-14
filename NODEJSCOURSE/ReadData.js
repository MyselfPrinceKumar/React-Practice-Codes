const dbConnect = require('./MongoDB_Connection')

const getData = async () => {
    let data = await dbConnect();
    // data = await data.find().toArray();   //It gives all the data
    data = await data.find({ name: "Subham" }).toArray();   //It gives that data which name is Subham (where clause kehte h es condition ko)
    console.log(data)
}
getData()
