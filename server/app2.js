const http = require("http");

// for req logging
// const server = http.createServer((req, res) => {
//     console.log(req.headers, req.url, req.method);

// });

// for sending respose

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "json");
    res.write("<html>");
    res.write("<head><title>My First Server</title></head>");
    res.write("<body>");
    res.write("<h1>Hello Friends Iam gona learn nodejs in a single month</h1>");
    res.write("<h1>This is Home page</h1>");
    res.write("<body>");
    res.write("<html>");
    return res.end();
  }else if(req.url === '/about'){
    res.setHeader('Content-Type', 'json');
    res.write('<html>');
    res.write('<head><title>My First Server</title></head>');
    res.write('<body>');
    res.write('<h1>This is About page</h1>');
    res.write('<body>');
    res.write('<html>');
    return res.end();
  }else if(req.url === '/contact'){
    res.setHeader('Content-Type', 'json');
    res.write('<html>');
    res.write('<head><title>My First Server</title></head>');
    res.write('<body>');
    res.write('<h1 style="color:"green";">This is contact page</h1>');
    res.write('<body>');
    res.write('<html>');
    res.end();
  }
});
  
const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
