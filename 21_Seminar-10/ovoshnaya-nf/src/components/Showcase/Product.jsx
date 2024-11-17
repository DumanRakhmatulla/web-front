import React from "react";

export default function Product({ addToCart, deleteToCart, item }) {
  //   console.log(props);
  const { id, name, price, amountLeft, img } = item;
  return (
    <div
      key={id}
      style={{
        border: "1px solid",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Amount Left: {amountLeft}</p>
      <img src={img} alt="img" style={{ width: "250px" }} />
      <button onClick={() => addToCart(id)}>Add To Cart</button>
      <button onClick={() => deleteToCart(id)}>Delete To Cart</button>
    </div>
  );
}
