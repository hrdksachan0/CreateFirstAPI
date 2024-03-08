const express = require("express");
const app = express();

const data = require("./data.json");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/service", (req, res) => {
  res.send(data);
});
