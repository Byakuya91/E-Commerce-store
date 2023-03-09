import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  // Fetch the product listed in the store.Js
  const products = useSelector((state) => state);
  console.log(products);

  // Dispatch the action through useDispatch: A redux hook
  const dispatch = useDispatch();

  // TODOs:
  //  1) Create API function and UseEffect(DONE)
  // 2) Test to see if the API is working(DONE)
  // 3) Connect the API data to the store inside our Application(DONE)

  // 1) API function
  const retrieveProducts = async () => {
    // define response variable
    const response = await axios
      .get("https://fakestoreapi.com/products")
      // Tracking for any errors during the call
      .catch((err) => {
        console.log("Err", err);
      });
    // Dispatching an action
    dispatch(setProducts(response.data));
  };

  // 2) Call the retrieveProducts through a UseEffect
  useEffect(() => {
    retrieveProducts();
  }, []);
  console.log("Products:", products);

  return (
    <div className="ui grid container">
      {" "}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
