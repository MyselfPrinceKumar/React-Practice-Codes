const dbConnect = require('./MongoDB_Connection')

const deleteData = async () => {
    const data = await dbConnect();
    const result = await data.deleteOne({ Roll: 16 })
    if (result.deletedCount > 0) {
        console.log("Data Deleted")
        //yaha cknowledged true dega data present nii hoga phir bhi so here we check deleteCount simply
    }
}
deleteData();
