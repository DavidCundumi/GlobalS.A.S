const express = require("express");
require("dotenv").config();
const app = express();
app.get("/", (req, res) => {
  console.log("Peticion recibida");
  res.send("Hola mundo");
});
//app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
