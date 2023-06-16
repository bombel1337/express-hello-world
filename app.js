const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.type('html').send(html);
  });
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
