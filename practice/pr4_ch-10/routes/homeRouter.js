// Core Module
const path = require('path');

// External Moduele 
const express = require('express');

//local Module
const rootDir = require('../utils/pathUtils');

const homeRoute = express.Router();

homeRoute.get('/',(req,res,next) => {
    console.log("Handling / for Get", req.url, req.method);
    res.sendfile(path.join(rootDir,'views','home.html'));
})

module.exports = homeRoute;