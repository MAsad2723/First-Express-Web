const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "static" directory
app.use(express.static('static'));
// app.use(express.urlencoded());

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.post('/', (req, res) => {
    const Name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const more = req.body.more;
    res.sendFile(__dirname + '/static/index.html');
})
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});