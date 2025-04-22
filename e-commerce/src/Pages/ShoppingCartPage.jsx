// ?React imports
import React from "react";

// ?Component imports
import ShoppingCart from "../Components/ShoppingCart";

// ?rrd imports
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";

// ?Redux imports
import { useSelector } from "react-redux";

const ShoppingCartPage = () => {
  // ? Navigate button to home
  const navigateHome = useNavigate();

  //? pull cart items from redux
  // ! Checking where the products are stored
  // const cartItems = useSelector((state) => {
  //   console.log("STATE LOOKS LIKE:", state);
  //   return state.cart.cartItems;
  // });

  const cartItems = useSelector((state) => state.cart.products);

  console.log("cart items is:", cartItems);

  return (
    <div className="shoppingCart">
      <h1>Shopping Cart</h1>
      <ShoppingCart />
      {cartItems.length === 0 && (
        <button onClick={() => navigateHome("/")}>Back to home</button>
      )}
    </div>
  );
};

export default ShoppingCartPage;
