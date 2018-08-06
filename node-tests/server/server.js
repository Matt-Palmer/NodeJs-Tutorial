const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(400).send({
        error: 'Bad Request',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Matt',
            age: 30
        },
        {
            name: 'Zoe',
            age: 29
        },
        {
            name: 'Lorraine',
            age: 50
        }
    ]);
});

app.listen(3000);


module.exports.app = app;
