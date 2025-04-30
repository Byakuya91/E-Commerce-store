import React from "react";
import "./ProductCard.css";

// Card component to display product information in a uniform layout

// redux imports

import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/actions/cartActions";
import { removeFromWishList } from "../../redux/actions/wishListActions";
import { addToCart } from "../../redux/actions/cartActions";

// third party imports
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, context = "default" }) => {
  const dispatch = useDispatch();

  const navigateToProduct = useNavigate();

  //?Handler functions for the card

  // Cart handler functions for the card
  const handleCardClick = () => {
    // ? prevent navigation if product is null/undefined
    if (!product) return;

    navigateToProduct(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    // console.log("Added to cart");
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    dispatch(removeFromCart(product.id));
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    dispatch(incrementQuantity(product.id));
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    dispatch(decrementQuantity(product.id));
  };

  // Wishlist handler functions

  const handleRemoveFromWishlist = (e) => {
    e.stopPropagation();
    dispatch(removeFromWishList(product.id));
  };

  return (
    <div
      className="product-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
      />
      <div className="product-card__info">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>

        {/* Buttons depend on context */}
        {context === "cart" && (
          <>
            <p className="product-card__quantity">
              Quantity: {product.quantity || 1}
            </p>
            <button className="product-card__button" onClick={handleIncrement}>
              +
            </button>
            <button className="product-card__button" onClick={handleDecrement}>
              -
            </button>
            <button
              className="product-card__button"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
          </>
        )}

        {context === "wishlist" && (
          <>
            <button className="product-card__button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className="product-card__button"
              onClick={handleRemoveFromWishlist}
            >
              Remove from Wishlist
            </button>
          </>
        )}

        {context === "default" && (
          <>
            <button className="product-card__button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
