const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method);
    res.write(`
        <html>
        <head></head>
        <title></title>
        <body>
        
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/kids">Kids</a></li>
            </ul>
            </ul>
        </nav>
        
        </body>
        <html />
        `);

        if(req.url === '/' || req.url === '/home'){
            res.write("<h1>Wellcome to Home Page</h1>");
            return res.end();
        }else if(req.url.toLowerCase() === '/about'){
            res.write("<h1>Wellcome to About Us Page</h1>");
            return res.end();
        }else if(req.url.toLowerCase() === '/women'){
            res.write("<h1>Wellcome to Women Section</h1>");
            return res.end();
        }else if(req.url.toLowerCase() === '/men'){
            res.write("<h1>Wellcome to Men Section</h1>");
            return res.end();
        }else if(req.url.toLowerCase() === '/kids'){
            res.write("<h1>Wellcome to Kids Section</h1>");
            return res.end();
        }
    
    });

server.listen(3000,()=>{
    console.log(`server listening on localhost:${server.address}`);
});

