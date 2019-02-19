const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('error', 'Unable to connect to MongoDB server');
    }
    console.log('OK', 'Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({ 
    //     _id: new ObjectID('5c6bb9644e95697e53e5ae78')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('error', 'Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('error', 'Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Kate'
    }).toArray().then(docs => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('error', 'Unable to fetch todos', err);
    });
    
    client.close();
});
