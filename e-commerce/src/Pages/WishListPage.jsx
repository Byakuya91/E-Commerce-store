import React from "react";
import WishList from "../Components/WishList/WishList";

const WishListPage = () => {
  return (
    <main className="wishlist-page">
      <section className="wishlist-section">
        <h1>My Wishlist</h1>
        <WishList />
      </section>
    </main>
  );
};

export default WishListPage;
