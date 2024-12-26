const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req);

    if(req.url === '/'){
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
    } else if(req.url === './submitDetail'){
       
       res.on('data',(chunks) => {
        console.log(chunks);
       })
        
    }
});

const port = 3000;

server.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});