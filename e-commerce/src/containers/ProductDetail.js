// ? Third party imports
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ?React imports
import React, { useEffect } from "react";

// ?Component imports
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";

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
  // console.log(product);

  // Seeing the product ID
  // console.log(productId);

  // API call

  // Define function for the call
  const retrieveProductDetail = async () => {
    // define a response variable and make the call
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    // Dispatch the action and add the action
    dispatch(selectedProducts(response.data));
  };

  // useEffect to call retrieveProductDetail
  useEffect(() => {
    if (productId && productId !== "") retrieveProductDetail();

    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
