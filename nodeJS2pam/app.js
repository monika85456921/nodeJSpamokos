const express = require("express");
const { request, response } = require("express");
const app = express();

app.use(express.json());
//sukurti port'a
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is working, the port is: " + PORT);
});

//sukurti route i data
const products = require("./data");
app.get("/store/fruits", (request, response) => {
  response.send(products);
});
//
app.get("/store/fruits/:id", (req, res) => {
  const product = products.find((el) => el.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Not Found");
  }
  res.send(product);
});
//sukurti nauja irasa
app.post("/store/fruits", (req, res) => {
  const newFruit = {
    id: 13,
    product: "avocado",
  };
  products.push(newFruit);
  res.send(products);
});
//updatint irasa
app.put("/store/fruits/:id", (req, res) => {
  const product = products.find((el) => el.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Not Found");
  }
  product.product = req.body.product;
  res.send(product);
});
//istrinti
app.delete("/store/fruits/:id", (req, res) => {
  const product = products.find((el) => el.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Not Found");
  }
  const fruitIndex = products.indexOf(product);
  products.splice(fruitIndex, 1);
  res.send(product);
});
//
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
