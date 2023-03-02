const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
