const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
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
    res.end();
  } else if (req.url === "/submitDetail" && req.method == "POST") {
    req.on("data", (chunks) => {
      console.log(chunks.toString());
    });

    fs.writeFileSync("user.text", "saurabh nath");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }

    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>Respose of submission</title></head>");
    // res.write("<body> <h1>Hello Chalo ji!</h1></body>");
    // res.write("</html>");
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
