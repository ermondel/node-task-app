const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => { console.log('Server is up on port: ' + PORT); });

//

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5cf3aa01c901e511ece9469d');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('5cf14b7eb55ea716c0283b45');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }

// main();
