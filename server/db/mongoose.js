var mongoose = require('mongoose');

const opt = { useNewUrlParser: true };

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', opt);

module.exports = { mongoose }
