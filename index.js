const express = require('express')
const app = express();
const port = 5004;

const courseinfo = require('./data/courses.json')
// const courses = require('/data/courses.json');

app.get('/', (req, res) => {
    res.send('News API Running');
})

app.get('/courseinfo', (req, res) =>{
    res.send(courseinfo);
})

// app.get('/courses-category', (req, res) => {
//     res.send(courses)
// })

app.listen(port, () => {
    console.log('learning hub server running')
})