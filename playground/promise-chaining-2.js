require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ccfe83be6251b1da529a7fc').then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });

const deleteTaskById = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskById('5ccfe876e6251b1da529a7fd').then(count => {
    console.log(count);
}).catch(error => {
    console.log(error);
});
