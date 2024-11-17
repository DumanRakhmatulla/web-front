import { products } from "../../data/products";
import Product from "./Product";
import { deleteToCart } from "../../helpers";
import { addToCart } from "../../helpers";

export default function Showcase() {
  //   console.log(products);
  return (
    <div style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}>
      {/* {products.map((product, index) => (
        <div key={index}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Amount Left: {product.amountLeft}</p>
          <img src={product.img} alt="img" style={{ width: "250px" }} />
        </div>
      ))} */}

      {products.map((product, index) => (
        <Product
          addToCart={addToCart}
          deleteToCart={deleteToCart}
          item={product}
          key={index}
        />
      ))}
    </div>
  );
}
