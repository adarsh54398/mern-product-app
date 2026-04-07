const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [];

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend working");
});

// PRODUCTS ROUTES
app.get("/api/products", (req, res) => {
  console.log("GET /api/products called"); // debug
  res.json(products);
});

app.post("/api/products", (req, res) => {
  console.log("POST /api/products called", req.body); // debug
  products.push(req.body);
  res.json(req.body);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});