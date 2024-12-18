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
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const navigateToProduct = useNavigate();

  // TODO: Create function to navigate back to product details
  const handleCardClick = () => {
    // ? prevent navigation if product is null/undefined
    if (!product) return;

    navigateToProduct(`/product/${product.id}`);
  };

  return (
    <div
      className="product-card"
      onClick={handleCardClick} // Navigate when clicking the card
      style={{ cursor: "pointer" }} // Show pointer cursor
    >
      <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
      />
      <div className="product-card__info">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        <p className="product-card__quantity">
          Quantity: {product.quantity || 1}
        </p>
        <button
          className="product-card__button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation
            dispatch(incrementQuantity(product.id));
          }}
        >
          +
        </button>
        <button
          className="product-card__button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation
            dispatch(decrementQuantity(product.id));
          }}
        >
          -
        </button>
        <button
          className="product-card__button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click bubbling to card
            dispatch(removeFromCart(product.id));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
