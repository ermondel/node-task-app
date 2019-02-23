var { mongoose } = require('./db/mongoose');
var { Todo }     = require('./models/todo');
var { User }     = require('./models/user');

console.log('ok');

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

// var newUser = new User({
//     email: 'example@gmail.com'
// });

// newUser.save().then(doc => {
//     console.log('Saved todo', doc);
// }, error => {
//     console.log('Unable to save User');
//     console.log(error);
// });
