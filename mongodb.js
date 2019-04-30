// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Albert Einstein',
    //     age: 70
    // }, (err, res) => {
    //     if (err) {
    //         console.log('Unable to insert user!');
    //     }
    //     console.log(res.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Richard Feynman',
    //         age: 63,
    //     },
    //     {
    //         name: 'Stephen Hawking',
    //         age: 71
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Lorem ipsum dolor sit amet.',
    //         completed: true,
    //     },
    //     {
    //         description: 'Consectetur adipiscing elit.',
    //         completed: false,
    //     },
    //     {
    //         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //         completed: false,
    //     }
    // ], (error, result) => {
    //     if (error) return console.log('Unable to insert documents!');
    //     console.log(result.ops);
    // });

    client.close();
});
