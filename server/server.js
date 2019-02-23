var mongoose = require('mongoose');

const opt = { useNewUrlParser: true };

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', opt);

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then(doc => {
//     console.log('Saved todo', doc);
// }, error => {
//     console.log('Unable to save Todo');
// });

// var otherTodo = new Todo({
//     text: 'Edit this video',
// });

// otherTodo.save().then(doc => {
//     console.log('Saved todo', doc);
// }, error => {
//     console.log('Unable to save Todo');
//     console.log(error);
// });

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
});

var newUser = new User({
    email: 'example@gmail.com'
});

newUser.save().then(doc => {
    console.log('Saved todo', doc);
}, error => {
    console.log('Unable to save User');
    console.log(error);
});
