const express = require('express');
const path = require('path');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils')
hostRouter.get("/add-home",(req, res, next) => {
    res.sendFile(path.join(rootDir,'/views','add-home.html'));
});
hostRouter.post("/submit-home",(req,res,next) => {
    console.log(req.body); // this will print the home_name in console.log
    res.sendFile(path.join(rootDir,'views','submit-home.html'));
});
module.exports = hostRouter;