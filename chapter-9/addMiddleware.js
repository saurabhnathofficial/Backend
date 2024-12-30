const http = require('http');
const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log("first middleware",req.method, req.url);
    
});
app.use((req,res,next) => {
    console.log("second middleware",req.method, req.url);
});


const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});