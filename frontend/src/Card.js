function Card({ name, price }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default Card;