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
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) throw new Error(`Password cannot contain "password"`);
        }
    }
});

// const me = new User({
//     name: 'Johannes Kepler',
//     age: 42
// });

// const me = new User({
//     name: '    Johannes Kepler ',
//     email: 'JOHANNES@MAIL.COM',
//     password: '1234567'
// });

// me.save().then(() => {
//     console.log('save ok', me);
// }).catch(error => {
//     console.log(error.name + ':', error._message);
//     console.log(error.errors);
// });

const Task = mongoose.model('Task', {
    description: { 
        type: String,
        required: true,
        trim: true
    },
    completed: { 
        type: Boolean,
        default: false
    }
});

const tsk = new Task({
    description: "go to the beach"
});

tsk.save().then(() => {
    console.log('save ok', tsk);
}).catch(error => {
    console.log(error.name + ':', error._message);
});
