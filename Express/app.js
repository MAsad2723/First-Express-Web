const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 3000;
//EXPRESS RELATED STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());
//PUG RELATED STUFF
app.set('view engine', 'pug');//Important
app.set('views', path.join(__dirname, 'views'));//Set the views directory

//ENDPOINTS
app.get('/', (req, res) => {
    const con = "Get this membership for 59.99$ only. Fill this form now!";
    const params = { 'title': 'PubG is the best game', 'content': con }
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    Name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let str = `Details of User:\n\tName : ${Name}.\n\tAge : ${age}.\n\tGender : ${gender}.\n\tAddress : ${address}.\n\tMore details : ${more}.`;
    fs.writeFileSync('output.txt', str);
    const con = "Get this membership for 59.99$ only. Fill this form now!";
    const params = { 'title': 'PubG is the best game', 'content': con ,'message': 'Form submitted Successfully'}
    res.status(200).render('index.pug', params);
})

//START THE SERVER
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})