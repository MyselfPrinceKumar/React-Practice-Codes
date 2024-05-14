const dbConnect = require('./MongoDB_Connection')

const updateData = async () => {
    const data = await dbConnect();
    const result = await data.updateOne(  //ye first occurence ko update karega sirf, sare ke liye update use hoga
        { name: "Abhi Kushwaha" },
        { $set: { Roll: 9, College: "JP University" } }
    )
    if (result.acknowledged) {
        console.log("Data Updated")
    }
}
updateData();