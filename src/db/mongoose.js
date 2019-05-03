const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: { 
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Email is invalid');
        }
    },
    age: { 
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error('Age must be a positive number');
        }
    }
});

// const me = new User({
//     name: 'Johannes Kepler',
//     age: 42
// });

const me = new User({
    name: '    Johannes Kepler ',
    email: 'JOHANNES@MAIL.COM'
});

me.save().then(() => {
    console.log('save ok', me);
}).catch(error => {
    console.log(error.name + ':', error._message);
    console.log(error.errors);
});

const Task = mongoose.model('Task', {
    description: { type: String },
    completed: { type: Boolean },
});

// const tsk = new Task({
//     description: "Foobar",
//     completed: false
// });

// tsk.save().then(() => {
//     console.log('save ok', tsk);
// }).catch(error => {
//     console.log(error.name + ':', error._message);
// });
