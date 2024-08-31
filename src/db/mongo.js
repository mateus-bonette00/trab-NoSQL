const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'cats';
let db = null;

module.exports.connect = async () => {
    await client.connect();
};

module.exports.getCatCollection = () => {
    return client.db(dbName).collection('allCats')
};
