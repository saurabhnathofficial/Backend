const http = require("http");
const fs = require("fs");

// ------------creating server----------------
// const server = http.createServer((req, res) => {
//     console.log('Hello, world');
//     console.log(req.headers,req.url,req.method);
// });

const port = 3000;

// ---------------Routing----------------

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     console.log("home page");
//   } else if (req.url === "/about") {
//     console.log("about page");
//   }else if(req.url === '/contact'){
//     console.log('contact page');
//     res.end();
//   }
// });

// ------------taking input from user----------------

const server = http.createServer((req, res) => {
  res.write("<html>");
  res.write("<head><title>userInput</title></head>");
  res.write("<body>");
  res.write("<h1>Enter your details:</h1>");
  res.write("<form action='/submitDetail' method='POST'>");
  res.write(
    "<input type='text' name='username' placeholder='Enter Username' /><br/><br/>"
  );
  res.write("<input type='radio' name='gender' value='male' />");
  res.write("<label for='male'>Male</label>");
  res.write("<input type='radio' name='gender' value='female' ");
  res.write("<label for='female'>Female</label><br/><br/>");
  res.write("<input type='submit' value='Submit' />");
  res.write("</form>");
  res.write("</body>");
  res.write("</html>");

  if(req.url === "/submitDetail" && req.method == 'POST') {
    fs.writeFileSync('user.text', 'saurabh nath');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
