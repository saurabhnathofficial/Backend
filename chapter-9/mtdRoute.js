const express = require('express');
const app = express();

app.get('/',(req,res,next) => {
    console.log("i am a get request");
    next();
})

app.post('/submit',(req,res,next) => {
    console.log("i am a post request");
    next();
})

app.get('/about',(req,res,next) => {
    console.log("i am a another get request");
    next();
})


app.listen(3000,() => {
    console.log('Server running at http://localhost:3000');
});