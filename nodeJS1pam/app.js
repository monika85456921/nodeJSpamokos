// console.log("Hello! I'm backend");

// const infomation = require("./modules/info");
// console.log(infomation);

// https://www.npmjs.com/package/express   visi moduliai
const products = require("./data");
console.log(products);

const express = require("express");
const { request, response } = require("express");
const app = express();

app.use(express.json());
const PORT = 5000;
app.listen(PORT || 8000, () => {
  console.log("Server is running on port " + PORT);
});
// http://localhost:5000/cia/yra/mano/routas/jis/toks/koki/susikursi
//sukurti rout'a
app.get("/cia/yra/mano/routas/jis/toks/koki/susikursi", (request, response) => {
  response.send(products);
});
//gauti konkrecias uzklausas
app.get("/cia/yra/mano/routas/jis/toks/koki/susikursi/:id", (req, res) => {
  const product = products.find((prod) => prod.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Product not found");
  }
  res.send(product);
});
//irasiti kazka i masyva
app.post("/cia/yra/mano/routas/jis/toks/koki/susikursi", (req, res) => {
  const newProduct = {
    id: 6,
    product: "monitor",
  };
  products.push(newProduct);
  res.send(products);
});
// updatint kazkoki yrasa
app.put("/cia/yra/mano/routas/jis/toks/koki/susikursi/:id", (req, res) => {
  const myProduct = products.find(
    (prod) => prod.id === parseInt(req.params.id)
  );
  if (!myProduct) {
    res.status(404).send("Product not found");
  }
  //postmane body kategorija
  myProduct.product = req.body.product;
  res.send(myProduct);
});
//delete
app.delete("/cia/yra/mano/routas/jis/toks/koki/susikursi/:id", (req, res) => {
  const myProduct = products.find(
    (prod) => prod.id === parseInt(req.params.id)
  );
  if (!myProduct) {
    res.status(404).send("Product not found");
  }
  const productIndex = products.indexOf(myProduct);
  products.splice(productIndex, 1);
  res.send(myProduct);
});
///









app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
