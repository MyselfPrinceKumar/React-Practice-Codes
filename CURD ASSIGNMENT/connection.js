const { MongoClient } = require('mongodb');

const url = "mongodb://0.0.0.0:27017";
const database = 'E-commerce';
const client = new MongoClient(url);

const dbConnect = async () => {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('student');
    console.log(collection.find().toArray());
    return collection;
}
module.exports = dbConnect;
