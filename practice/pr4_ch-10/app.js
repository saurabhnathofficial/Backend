// Core Modules 
const path = require('path');

// External Module 
const express = require('express');

//local Module
const rootDir = require('./utils/pathUtils');
const homeRoute = require('./routes/homeRouter');
const contactRoute = require('./routes/contactRouter');

const app = express();

app.use(express.urlencoded());

app.use(homeRoute);

app.use(contactRoute);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views','404.html'))
});


app.listen(3000,() => {
    console.log('Server is running at http://localhost:3000');
})