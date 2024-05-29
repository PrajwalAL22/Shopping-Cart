import React from "react";

const ItemCard = ({ item, addToCart }) => {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button className="end-button" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
