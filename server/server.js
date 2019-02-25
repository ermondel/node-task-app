var express     = require('express');
var bodyParser  = require('body-parser'); 

var { mongoose } = require('./db/mongoose');
var { Todo }     = require('./models/todo');
var { User }     = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    console.log('0');
    todo.save().then(doc => {
        console.log('1');
        res.send(doc);
    }, error => {
        console.log('2');
        res.status(400).send(error);
    });
});

app.listen(3000, () => {
    console.log('Server', 'Started on port 3000');
});

module.exports = { app }
