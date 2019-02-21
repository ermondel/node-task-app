const { MongoClient, ObjectID } = require('mongodb');

const opt = { useNewUrlParser: true };

MongoClient.connect('mongodb://localhost:27017/TodoApp', opt, (err, client) => {
    if (err) {
        return console.log('error', 'Unable to connect to MongoDB server');
    }
    console.log('OK', 'Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c6c2f91a9405eef8de33474')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c6691b98ba1d420944e010a')
    }, {
        $set: {
            name: "Serg"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });
    
    client.close();
});
