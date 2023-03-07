import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  // Fetch the product listed in the store.Js
  const products = useSelector((state) => state);
  console.log(products);

  // TODOs:
  //  1) Create API function and UseEffect
  // 2) Test to see if the API is working
  // 3) Connect the API data to the store inside our Application

  // 1) API function
  const retrieveProducts = async () => {
    // define response variable
    const response = await axios
      .get("https://fakestoreapi.com/products")
      // Tracking for any errors during the call
      .catch((err) => {
        console.log("Err", err);
      });
    // checking the response
    console.log(response.data);
  };

  // 2) Call the retrieveProducts through a UseEffect
  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <div className="ui grid container">
      {" "}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
