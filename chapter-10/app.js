const http = require('http');
const express  = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.get('/about',(req,res,next) => {
    console.log('will come back soon...');
    res.send('<h1>will see you soon baby....</h1>');
    next();
})
app.use((req, res, next) => {
    console.log('Second middleware');
    res.send('<h1>Hello World!</h1>');
    next();
})
app.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000');
})