// ?React imports
import React from "react";

// ?component imports
import SearchBar from "../Components/SearchBar/SearchBar";

// ?Third party imports
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// ?Redux imports
import { setSearchQuery } from "../redux/actions/searchActions";

// define a header

const Header = () => {
  // TODO: Create navigate function(DONE)
  const navigate = useNavigate();

  // TODO: create dispatch function(DONE)
  const dispatch = useDispatch(); // Add useDispatch to update Redux state

  // TODO: Access the cart from the story
  const cart = useSelector((state) => state.cart);

  // TODO: Clickable Shopping Cart Icon(DONE)
  const handleCartClick = () => {
    navigate("/cart");
  };

  // TODO: navigate to the home page
  const handleLogoClick = () => {
    // ?! fix for potential search filter problem
    dispatch(setSearchQuery(""));
    navigate("/");
  };
  // Access the cart from the store
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 style={{ cursor: "pointer" }} onClick={handleLogoClick}>
          Mundane Market
        </h2>
        {/* <div className="SearchBar-container">
          <SearchBar />
        </div> */}
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
