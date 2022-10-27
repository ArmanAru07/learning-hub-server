const express = require('express')
const app = express();
const cors = require('cors');
const port = 5004;

app.use(cors());

const courseinfo = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('News API Running');
})

app.get('/courseinfo', (req, res) =>{
    res.send(courseinfo);
})

app.listen(port, () => {
    console.log('learning hub server running')
})