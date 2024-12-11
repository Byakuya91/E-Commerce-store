import React from "react";

// Card component to display product information in a uniform layout

// redux imports

import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  // Defensive check: Ensure product has all necessary properties
  if (!product || !product.price || !product.title || !product.image) {
    return <div>Invalid Product Data</div>;
  }

  // grabbing the state from store.js. Remember, we have a store so this does NOT need be passed as props.
  //   const product = useSelector((state) => state.allProducts.products);
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
          Quantity: {product.quantity || 1 /* Fallback for quantity */}
        </p>
        {/* <button className="product-card__button" onClick={onRemove}>
          Remove
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
