import React from "react";

// ?Component imports
import ShoppingCart from "../Components/ShoppingCart";

// ?rrd imports
import { useNavigate } from "react-router-dom";

const ShoppingCartPage = () => {
  const navigateHome = useNavigate();

  return (
    <div className="shoppingCart">
      <h1>Shopping Cart</h1>
      <ShoppingCart />
      <button onClick={() => navigateHome("/")}>Back to home</button>
    </div>
  );
};

export default ShoppingCartPage;
