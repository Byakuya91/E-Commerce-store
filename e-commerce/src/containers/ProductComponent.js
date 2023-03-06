import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  // grabbing the state from store.js. Remember, we have a store so this does NOT need be passed as props.
  const products = useSelector((state) => state.allProducts.products);
  // destructuring the products object
  const { id, title } = products[0];

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
