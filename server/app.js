const http = require("http");
//http is a core module that is present in the node by default

// function reqestListener(req,res){
//     console.log(req);
// }

const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit(); // to disable the server request
});

// server.listen(3000);

const port = 3000;
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
