const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: { type: String },
    age: { type: Number }
});

const me = new User({
    name: 'Johannes Kepler',
    age: 42
});

me.save().then(() => {
    console.log('save ok', me);
}).catch(error => {
    console.log(error.name + ':', error._message);
});
