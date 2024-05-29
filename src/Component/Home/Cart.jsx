import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/CartSlice";

const Cart = ({ setPage }) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <div className="header">
        <h1>Shopping Cart</h1>
        <button className="logout-button" onClick={() => setPage("register")}>
          Log Out
        </button>
      </div>
      <div className="item-holder">
        {items.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
              <div className="update-quantity">
                <button
                  className="quantity-button"
                  onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                >
                  +
                </button>
                <button
                  className="quantity-button"
                  onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                >
                  -
                </button>
              </div>
              <button
                className="remove-button"
                onClick={() => dispatch(removeItem({ id: item.id }))}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <button className="back-home-button" onClick={() => setPage("home")}>
        Back to Home
      </button>
    </div>
  );
};

export default Cart;
