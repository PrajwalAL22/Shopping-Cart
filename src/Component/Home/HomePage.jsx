import React from "react";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/CartSlice";
import items from "../../Items/ItemArr";

const HomePage = ({ setPage }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="home-page">
      <div className="header">
        <h1>Shopping Cart</h1>
        <button className="logOut" onClick={() => setPage("register")}>
          Log Out
        </button>
      </div>
      <h1>One solution to all your shopping needs</h1>
      <div className="items">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} addToCart={handleAddToCart} />
        ))}
      </div>
      <button className="cart-button" onClick={() => setPage("cart")}>
        Go to Cart
      </button>
    </div>
  );
};

export default HomePage;
