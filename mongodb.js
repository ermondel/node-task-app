// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Albert Einstein',
    //     age: 70
    // }, (err, res) => {
    //     if (err) {
    //         console.log('connect error');
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

    db.collection('tasks').insertMany([
        {
            description: 'Lorem ipsum dolor sit amet.',
            completed: true,
        },
        {
            description: 'Consectetur adipiscing elit.',
            completed: false,
        },
        {
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            completed: false,
        }
    ], (error, result) => {
        if (error) return console.log('Unable to insert documents!');
        console.log(result.ops);
    });

    client.close();
});
