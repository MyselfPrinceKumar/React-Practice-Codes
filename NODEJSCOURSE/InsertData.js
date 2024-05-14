const dbConnect = require('./MongoDB_Connection');

const InsertData = async () => {
    const data = await dbConnect();
    //insertMany Inserted many data like this, to insert one object we use insertOne
    const result = await data.insertMany(
        [
            {
                name: "Abhi Kushwaha",
                Roll: 12,
                College: "Baba College",
                Status: "Ethical Hacker"
            },
            {
                name: "Gulsan Kushwaha",
                Roll: 16,
                College: "Millenium College",
                Status: "Drug Inspector"
            }

        ])
    if (result.acknowledged) {
        console.log("Data Inserted....")
    }
}
InsertData();