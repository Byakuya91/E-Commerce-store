import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  // Fetch the product listed in the store.Js
  const products = useSelector((state) => state);
  console.log(products);

  // TODOs:
  //  1) Create API function and UseEffect
  // 2) Test to see if the API is working
  // 3) Connect the API data to the store inside our Application

  return (
    <div className="ui grid container">
      {" "}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
