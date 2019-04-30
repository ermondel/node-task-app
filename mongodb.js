// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID('5cc829a3a6ae0a1e5c96bf46') }, (error, user) => {
    //     if (error) return console.log('Unable to fetch');
    //     console.log(user);
    // });

    // db.collection('users').find({ age: 70 }).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({ age: 70 }).count((error, count) => {
    //     console.log(count);
    // });

    db.collection('tasks').findOne({ _id: new ObjectID('5cc82a2bbd28c4191ce43ad2') }, (error, task) => {
        if (error) return console.log('Unable to fetch');
        console.log('\n', task, '\n');
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log('\n', tasks, '\n');
    });

    client.close();
});
