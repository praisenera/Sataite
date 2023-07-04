import React, { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState("");

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    setNotification("Item added to cart!");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div>
        <button onClick={() => addItemToCart("Item 1")}>Add Item</button>
      </div>

      <div>
        <h2>Cart Items</h2>
        {cartItems.length == 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {notification && <p>{notification}</p>}
    </div>
  );
}

export default ShoppingCart;
