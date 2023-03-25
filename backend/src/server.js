const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("onsearch")) {
      const id = req.url.split("/").at(-1);
      getCharById(res, id);
      return;
    }

    if (req.url.includes("detail")) {
      const id = req.url.split("/").at(-1);
      getCharDetail(res, id);
      return;
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 route not found");
  })
  .listen(PORT, "localhost");
