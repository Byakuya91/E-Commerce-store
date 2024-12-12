import React from "react";
import "./ProductCard.css";

// Card component to display product information in a uniform layout

// redux imports

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
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
        {/* <button
          className="product-card__button"
          onClick={() => dispatch(incrementQuantity(product.id))}
        >
          +
        </button>
        <button
          className="product-card__button"
          onClick={() => dispatch(decrementQuantity(product.id))}
        >
          -
        </button> */}
        <button
          className="product-card__button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
