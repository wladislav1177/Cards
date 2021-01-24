const express = require('express');
const people = require('./data/MOCK_DATA.json');


// Server
const app = express();
app.listen(5000, () => console.log('Server has been started...'));

//Запрос с HomePage
app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    const page = req.query.page;
    const limit = 12;
    const numberOfPages = Math.ceil(people.length / limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const resultPeople = people.slice(startIndex, endIndex);
    
    res.json({resultPeople, page, numberOfPages});
});

//Запрос с CardPage
app.get('/card/:id', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    const id = req.params.id;
    res.send(people.find(item => item.id.$oid == id));
});