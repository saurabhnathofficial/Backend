const http = require("http");
const {reqHandler} = require("./handler");


const server = http.createServer(reqHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
