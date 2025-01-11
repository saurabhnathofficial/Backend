// External Router 
const express = require('express');
const app = express();
const path = require('path');

// local Module 
const userRouter = require("./Routes/userRouter.js");
const hostRouter = require("./Routes/hostRouter.js");
const rootDir = require('./utils/pathUtils.js');
app.use((req, res, next) => {
    console.log(req.method, req.url); 
    next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);


//404 page not found
app.use((req, res, next) => {
    res.sendFile(path.join(rootDir,'views','404.html'));
});
const port = 2000;
app.listen(port,(req,res) => {
    console.log(`Server is running on port ${port}`);
})
