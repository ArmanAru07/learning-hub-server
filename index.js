const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('News API Running');
})

app.listen(port, () => {
    console.log('learning hub server running')
})