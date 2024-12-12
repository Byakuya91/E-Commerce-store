import React from "react";

// ?Redux imports
import { useSelector, useDispatch } from "react-redux";

//? Component Imports
import ProductCard from "./ProductCard/ProductCard";

const ShoppingCart = () => {
  // TODO: Create the shopping cart and map out the elements(ONGOING)
  // TODO: Implement Crud functionality where you can update the quanities, and remove the products, and even click on the displayed product to go to the main page for more information.
  // TODO: Showcase the total price of items in the cart

  // ? two variables: cartItems and totalPrice

  // Cart items from redux store
  const cartItems = useSelector((state) => state.cart.products);

  const cartDispatch = useDispatch();

  // ! If there are no items inside the cart
  if (!cartItems || !cartItems.length) {
    return <div>Your cart is empty!</div>;
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shoppingCart-container">
      {cartItems.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          // onRemove={() => handleRemove(product.id)}
        />
      ))}
      <div className="cart-total">
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
