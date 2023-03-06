import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  // Fetch the product listed in the store.Js
  const products = useSelector((state) => state);
  console.log(products);

  return (
    <div className="ui grid container">
      {" "}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
