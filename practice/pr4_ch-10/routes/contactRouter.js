//Core Module
const path = require('path');

// External module 
const express = require('express');

// local Module 
const rootDir = require('../utils/pathUtils');

const contactRoute = express.Router();

contactRoute.get('/contact-us',(req,res,next) => {
    res.sendfile(path.join(rootDir,'views','contact-us.html'));
})

contactRoute.post('/contact-us',(req,res,next) => {
    console.log(req.body);
    res.sendfile(path.join(rootDir,'views','contact-success.html'));
})

module.exports = contactRoute;