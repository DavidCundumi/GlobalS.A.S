const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
