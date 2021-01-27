const express = require('express');

const app = express();

app.use ((req, res, next,)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acess-Control-Allow-Headers', 'Origin, X-Requeste-With, Content, Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH,OPTIONS');

    next();
})

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
    res.status(200).json(stuff);
});




module.exports = app;