const sumReqHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyobj = Object.fromEntries(params);
    const result = Number(bodyobj.first) + Number(bodyobj.second);
    console.log(result);
    // res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Home</title></head>
        <body>
            <h1>Hurray!!!!</h1>
            <h2>Result : ${result}</h2>
            <a href="/">Go to Home page</a>
        </body>           
        </html>            
    `);
    
    return res.end();
  });
};
exports.sumReqHandler = sumReqHandler;
