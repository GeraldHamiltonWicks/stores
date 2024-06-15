import express from 'express';

const PORT = 3001;
const server = express();


server.use(express.json());

const courses = ['fullstack', 'game development', 'youtube'];

// Return one course
server.get('/courses/:index', (req, res) => {
    const { index } = req.params;

    return res.json(courses(index));
})

// Return all courses
server.get('/courses', (req, res) => {
    return res.json(courses);
})

// Create one course
server.post('/courses', (req, res) => {
    const { name } = req.body;
    courses.push(name);

    return res.json(courses);
})

// Update one course
server.put('/courses/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    courses[Number(index)] = name;

    return res.json(courses);
})

// Delete one course
server.delete('/courses/:index', (req, res) => {
    const { index } = req.params;
    courses.splice(Number(index), 1);

    return res.json(courses);
})


server.listen(`${PORT}`, () => {
    console.log(`Server runing on port ${PORT}`);
});
