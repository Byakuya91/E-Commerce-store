// ? Library imports
import React from "react";
import { useSelector } from "react-redux";

// ? Component imports
import ProductCard from "../ProductCard/ProductCard";

const WishList = () => {
  // Step One: grab the wishlist from the store
  const { products: wishList } = useSelector((state) => state.wishList);

  console.log("the items in the wishlist is: ", wishList);

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      {wishList === 0 ? (
        <h2>Wishlist is empty</h2>
      ) : (
        wishList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default WishList;
