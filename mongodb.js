// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5cc94905f1280d2085203d84")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // });

    // updatePromise.then(result => {
    //     console.log(`successfully found and changed: ${result.matchedCount}/${result.modifiedCount}`);
    // }).catch(error => {
    //     console.log(error);
    // });

    const updateMany = db.collection('tasks').updateMany(
        { completed: false },
        { $set: { completed: true }
    });

    updateMany.then(result => {
        console.log(`successfully found and changed: ${result.matchedCount}/${result.modifiedCount}`);
    }).catch(error => {
        console.log('update error');
    });

    client.close();
});
