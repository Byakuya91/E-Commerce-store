import React from "react";

// ?React imports
import { useState } from "react";

// ?Component imports

// ?third party imports
import { setSearchQuery } from "../../redux/actions/searchActions";

// ?Redux imports
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);

  const searchQuery = useSelector((state) => state.search.query); // Assuming the reducer is set up correctly

  // ? Create function to handle search
  const handleSearch = (event) => {
    //  define query for search
    const searchQuery = event.target.value;
    dispatch(setSearchQuery(searchQuery));

    setSearchTerm(searchQuery);
  };

  // 4) Filter products based on input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("The filtered products are: ", filteredProducts);

  return (
    <div className="SearchBar-Input-Container">
      <input
        type="search"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
