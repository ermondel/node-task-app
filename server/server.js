var mongoose = require('mongoose');

const opt = { useNewUrlParser: true };

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', opt);

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then(doc => {
    console.log('Saved todo', doc);
}, error => {
    console.log('Unable to save Todo');
});

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123456789
});

otherTodo.save().then(doc => {
    console.log('Saved todo', doc);
}, error => {
    console.log('Unable to save Todo');
});
