const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Village: String,
    Job: String
});
const saveData = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/E-commerce")

    const productModel = new mongoose.model("Products", ProductSchema)
    const data = new productModel({ name: "Prince Rock", price: 567, Village: "Pasarma", Job: "Developer" })
    const result = await data.save();
    console.log(result)
}
saveData()
//Update the data
const updateData = async () => {
    const productModel = new mongoose.model("Products", ProductSchema)
    const data = await productModel.updateMany({ name: "Prince Rock" }, { $set: { Village: "Pasarma" } })
    console.log(data)
}
// updateData()

// Read the Data

const readData = async () => {
    const productModel = new mongoose.model("Products", ProductSchema)
    const data = await productModel.find()
    console.log(data)
}
readData()


//Deleting the data
// const deleteData = async () => {
//     const productModel = new mongoose.model("Products", ProductSchema)
//     const data = await productModel.deleteOne({name:"Rock"})
//     console.log(data)
// }
// deleteData()

