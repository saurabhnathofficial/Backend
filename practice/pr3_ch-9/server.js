const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log(req.method,req.url);
    console.log('First middleware');
    next();
})
app.use((req,res,next) => {
    console.log(req.method,req.url);
    console.log('second middleware');
    next();
})
// app.use((req,res,next) => {
//     console.log(req.method,req.url);
//     console.log('third middleware returning response'); 
//     res.send("<h1>Hello! I'm sending the response</h1>");
//     next();
// })

app.use('/',(req,res,next) => {
    console.log("I'm handling / path");
    next();
})

// This middleware for display contact us page 
app.get('/contact-us',(req,res,next) => {
    console.log(req.method,req.url);
    console.log("I'm handling /contact-us page");
    res.send(`
        <h1>Please Enter Your Details : </h1>
        <form action='/contact-us' method='post'>
        <input type='text' name='name' placeholder='Enter Name' /><br/><br/>
        <input type='text' name='address' placeholder='Enter Address' /><br/><br/>
        <input type='submit' name='submit'/>
        </form> 
        `);
})

// this middleware for handling data of contact-us page 

app.post('/contact-us',(req,res,next) => {
    console.log("i got the contact details !!")
    res.send('<h1>I got the contact details</h1>')
})
app.listen(3000,() => {
    console.log('Server is running at http://localhost:3000');
})