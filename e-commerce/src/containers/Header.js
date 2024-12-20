// ?React imports
import React from "react";

// ?component imports

// ?Third party imports
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// define a header

const Header = () => {
  // TODO: Create navigate function(DONE)
  const navigate = useNavigate();

  // TODO: Access the cart from the story
  const cart = useSelector((state) => state.cart);

  // TODO: Clickable Shopping Cart Icon(DONE)
  const handleCartClick = () => {
    navigate("/cart");
  };

  // TODO: navigate to the home page
  const handleLogoClick = () => {
    navigate("/");
  };
  // Access the cart from the store
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 style={{ cursor: "pointer" }} onClick={handleLogoClick}>
          Mundane Market
        </h2>
      </div>
      <div className="right menu">
        {/* Clickable Shopping Cart Icon */}
        <div
          className="item"
          onClick={handleCartClick}
          style={{ cursor: "pointer" }}
        >
          <i className="shopping-cart icon"></i>
          <div className="ui button">{cart.products.length}</div>{" "}
          {/* Adjust cart count */}
        </div>
      </div>
    </div>
  );
};

export default Header;
