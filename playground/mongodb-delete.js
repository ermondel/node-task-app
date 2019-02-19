const { MongoClient, ObjectID } = require('mongodb');

const opt = { useNewUrlParser: true };

MongoClient.connect('mongodb://localhost:27017/TodoApp', opt, (err, client) => {
    if (err) {
        return console.log('error', 'Unable to connect to MongoDB server');
    }
    console.log('OK', 'Connected to MongoDB server');

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // challenge
    // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c6996605e581c192ca272a4') }).then((result) => {
        console.log(result);
    });
 
    client.close();
});
