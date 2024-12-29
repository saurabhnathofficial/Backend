const http = require('http');
const syntaxTest = require('./syntax')
const runtimeTest = require('./runtime');
const logicalTest = require('./logical');

const server = http.createServer((req, res) => {
    console.log(req.headers,req.method);
    syntaxTest();
    runtimeTest();
    logicalTest();
});

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
})