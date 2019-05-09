require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5ccfe83be6251b1da529a7fc').then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
