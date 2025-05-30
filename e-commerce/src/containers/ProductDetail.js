// ? Third party imports
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// ?React imports
import React, { useEffect } from "react";

// ?Component imports
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";

// ?Redux imports
import {
  addToWishList,
  removeFromWishList,
} from "../redux/actions/wishListActions";

import { addToCart } from "../redux/actions/cartActions";

const ProductDetail = () => {
  // TODOS
  // 1) Import Axios(DONE)
  // 2) Make API call to get a SINGLE product(DONE)
  // 3) Render out the product details(DONE)

  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const dispatch = useDispatch();

  // ? WishList dispatch
  // ? convert the products

  const { products: wishList } = useSelector((state) => state.wishList);

  // ? Toggle for add and remove fron wishlist

  const isInWishList = wishList.some((item) => item.id === product.id);

  // ? define the product id:

  // console.log("the wishList before Rendering is: ", wishList);

  // ! useEffects for testing variables and API calls
  useEffect(() => {
    console.log("Wishlist updated:", wishList);
  }, [wishList]);

  useEffect(() => {
    console.log("Current product in wishList?", isInWishList);
  }, [isInWishList]);

  // console.log(product);

  // Seeing the product ID
  // console.log(productId);

  // API call

  // ? Handler functions

  // Adding and removing from the wishList
  const handleAddToWishList = () => {
    dispatch(addToWishList(product));
  };

  const handleRemoveFromWishList = () => {
    // Checking if a product.id exists
    if (!product?.id) {
      return;
    } else {
      dispatch(removeFromWishList(product.id));
    }
  };

  // Define function for the call
  const retrieveProductDetail = async () => {
    try {
      // ? API call
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      // ? Dispatch to grab the product
      dispatch(selectedProducts(response.data));
    } catch (err) {
      // ? Error handling
      console.error("Failed to fetch product detail:", err);
    }
  };

  //? useEffect to call retrieveProductDetail
  useEffect(() => {
    if (productId && productId !== "") retrieveProductDetail();

    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  console.log("wishList:", wishList);
  console.log("isInWishList:", isInWishList);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div
                  className="ui vertical animated button"
                  tabIndex="0"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
                <div>
                  {isInWishList ? (
                    <button onClick={handleRemoveFromWishList}>
                      Remove from WishList
                    </button>
                  ) : (
                    <button onClick={handleAddToWishList}>
                      Add to WishList
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
