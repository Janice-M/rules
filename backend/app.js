const express = require('express');

const app = express();


app.use((req,res)=> {
    res.json({message: 'Hey Rafiki yangu, your message was successful'})
})
module.exports = app;