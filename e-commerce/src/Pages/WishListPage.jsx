// ?Library imports
import React from "react";

// ?Component imports
import WishList from "../Components/WishList/WishList";
import SearchBar from "../Components/SearchBar/SearchBar";

// ? RRD imports
import { useNavigate } from "react-router-dom";

const WishListPage = () => {
  const navigateHome = useNavigate();

  return (
    <main className="wishlist-page">
      {/* <SearchBar /> */}
      <div className="wWsh-list-Search-Bar-Container"></div>
      <section className="wishlist-section">
        <h1>My Wishlist</h1>
        <WishList />
      </section>
      <button onClick={() => navigateHome("/")}>Back to home</button>
    </main>
  );
};

export default WishListPage;
