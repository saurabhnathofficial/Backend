const {sumReqHandler} = require("./sum");
const reqHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.write(`
            <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome</h1>
                <h1>To The Calculator App</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>           
            </html>    
            
        `);
    return res.end();

  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>
            <h1>Do Calculation here...</h1>
            <form method="post" action="calculate-result" >
                <input type="text" placeholder="Enter first num..." name="first"/>
                </br>
                </br>
                <input type="text" placeholder="Enter second num..." name="second"/>
                </br>
                </br>
                <input type="submit" value="submit" />
            </form>
        </body>           
        </html>    
        
    `);
    return res.end();

  }else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
       sumReqHandler(req, res);
       return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
        <html>
        <head><title>Home</title></head>
        <body>
            <h1>404 Page not Found!!!</h1>
            <a href="/">Go to Home page</a>
        </body>           
        </html>            
    `);
    return res.end();
};

exports.reqHandler = reqHandler;
