import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  //  TODOS
  // 1)Code out the link to the Product Details page(DONE)

  // grabbing the state from store.js. Remember, we have a store so this does NOT need be passed as props.
  const products = useSelector((state) => state.allProducts.products);

  // display the products within the component
  // 1) Create a constant variable
  const renderList = products.map((product) => {
    // destructuring the product object
    const { id, title, image, price, category } = product;
    return (
      // <div className="four column wide " key={id}>
      <Link to={`/product/${id}`}>
        <div className="ui link cards" key={id}>
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta ">{category}</div>
            </div>
          </div>
        </div>
      </Link>
      // </div>
    );
  });

  return <>{renderList} </>;
};

export default ProductComponent;
