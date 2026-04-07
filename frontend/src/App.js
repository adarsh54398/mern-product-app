import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = async () => {
    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, price })
    });

    window.location.reload();
  };

  return (
    <div>
      <h1>Product List</h1>

      {/* 🔥 INPUT FIELDS */}
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      {/* DISPLAY */}
      {products.map((item) => (
        <Card key={item._id || Math.random()} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default App;