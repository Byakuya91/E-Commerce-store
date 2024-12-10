// ?React imports
import React from "react";

// ?component imports

// ?Third party imports
import { useSelector } from "react-redux";

// define a header

const Header = () => {
  // Access the cart from the store
  const cart = useSelector((state) => state.cart);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2> Mundane Market</h2>
      </div>
      <div className="right menu">
        <div className="item">
          <i className="shopping-cart icon"></i>
          <div className="ui button">{cart.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
