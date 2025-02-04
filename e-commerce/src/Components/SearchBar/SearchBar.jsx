import React from "react";

// ?React imports
import { useState } from "react";

// ?Component imports

// ?third party imports

// ?Redux imports
import { useSelector } from "react-redux";

const SearchBar = () => {
  // TODO: Hook up Search Bar
  // 1) Create the input field(DONE)
  // 2) Setup event listener to search for products(DONE)
  // 3) Create a function to handle the search(DONE)
  // 4) Pass the function to the input field
  // 5) Hook up to redux store

  // ? State Search term
  const [searchTerm, setSearchTerm] = useState("");

  // ? Access products from redux store

  const products = useSelector((state) => state.allProducts.products);

  // ? Create function to handle search
  const handleSearch = (event) => {
    //  define query for search
    const searchQuery = event.target.value;

    setSearchTerm(searchQuery);
  };

  // 4) Filter products based on input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("The filtered products are: ", filteredProducts);

  return (
    <div className="SearchBar-Input-Container">
      <input
        type="search"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
