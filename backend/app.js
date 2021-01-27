const express = require('express');

const app = express();

app.use('/api/stuff',(req, res, next) =>{

    const stuff = [
        {
            _id: 'oeihfzeoi',
            title : 'my first thing',
            description : 'info about my first thing',
            imageUrl : '',
            price : 4900,
            userId : 'quack'
        },
        {
            _id: 'oeihfzadoi',
            title : 'my second thing',
            description : 'info about my second thing',
            imageUrl : '',
            price : 5000,
            userId : 'meow'
        }
    ];
    res.status
});




module.exports = app;