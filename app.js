const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks)

// // get all the tasks
// app.get('/api/v1/tasks')

// // create a new tasks
// app.post('/api/v1/tasks')

// // Get single task
// app.get('/api/v1/tasks/:id')

// // update a task
// app.patch('/api/v1/tasks/:id')

// // delete task
// app.delete('/api/v1/tasks/:id')


const port = 3000;

app.listen(port, console.log(`server is listening on port (${port})`));
