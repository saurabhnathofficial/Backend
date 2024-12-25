const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url,req.method);

  if (req.url == "/") {
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
  } else if (req.url == "/submitDetail" && req.method == "POST") {

    const body = [];
    req.on('data',(chunk) => {
        console.log(chunk.toString());
    });

    req.on('end',() => {
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);
        // const bodyObj = {};
        // for(const [key, value] of params.entries()) {
        //     bodyObj[key] = value;
        // }

        let bodyObj = Object.fromEntries(params);
        console.log(bodyObj);
    });
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
