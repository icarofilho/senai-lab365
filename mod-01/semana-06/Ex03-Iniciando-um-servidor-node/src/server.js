const express = require("express");
const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  return res.send({ mensagem: "Hello World!" });
});

module.exports = app;
