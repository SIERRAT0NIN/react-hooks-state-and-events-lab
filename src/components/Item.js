import { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(!"in-cart");

  const handelAddCart = () => {
    setAddCart(addCart === "in-cart" ? "" : "in-cart");
  };

  return (
    <li className={`${addCart}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handelAddCart} className="add">
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
