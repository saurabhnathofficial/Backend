const http = require('http'); 
const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log("first middleware",req.method, req.url);
    next();
})
app.use((req,res,next) =>{
    console.log("second middleware",req.method, req.url);
    res.send("<h1>Hello ji i'm running in second middleware</h1>");
    next();
})
app.use((req,res,next) =>{
    console.log("third middleware",req.method, req.url);
    
})
app.listen(PORT,() =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
