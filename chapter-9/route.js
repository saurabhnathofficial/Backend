//---Handling Routes on the Path basis---
const express = require('express');
const app = express();

app.use('/',(req,res,next) => { //Routing 
    console.log('First middleware');
    next();
})
app.use('/about',(req,res,next) => { //Routing 
    console.log('second middleware');
    next();
})
app.use('/contact',(req,res,next) => { //Routing 
    console.log('third middleware');
    res.end();
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});