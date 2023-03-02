const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
app.get("/", (req, res) => {
  console.log("Peticion recibida");
  res.sendFile("../dist/global-s.a.s/index.html", { root: __dirname });
});
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
