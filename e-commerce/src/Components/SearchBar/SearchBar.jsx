// ?React imports
import { useState, useEffect } from "react";

// ?Component imports

// ?third party imports
import { setSearchQuery } from "../../redux/actions/searchActions";
import "./SearchBar.css";

// ?Redux imports
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  // TODO: Hook up Search Bar
  // 1) Create the input field(DONE)
  // 2) Setup event listener to search for products(DONE)
  // 3) Create a function to handle the search(DONE)
  // 4) Pass the function to the input field(DONE)
  // 5) Hook up to redux store(DONE)

  // ! Problem
  // 📝 Issue Summary:
  // The search functionality was not returning correct results because Redux state updates are asynchronous.
  // This means the `searchQuery

  // ? State Search term
  const [searchTerm, setSearchTerm] = useState("");

  // ? Access products from redux store
  const dispatch = useDispatch();

  // const products = useSelector((state) => state.allProducts.products);

  const searchQuery = useSelector((state) => state.search.query); // Assuming the reducer is set up correctly

  // ? Solution filtered products piece of state
  const [filteredProducts, setFilteredProducts] = useState([]);

  // console.log("The searchQuery is: ", searchQuery);
  console.log("Local Search Term:", searchTerm);

  // ? Create function to handle search
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query); // Update local state
    dispatch(setSearchQuery(query)); // Update Redux state
  };

  // ? function to clear the search button
  const clearSearch = () => {
    setSearchTerm(""); // Update local state
    dispatch(setSearchQuery("")); // Update Redux state
  };

  // 4) Filter products based on input
  // ? A solution: using a useEffect to change to searchQuery changes to avoid the issue posed above.
  // ?OLD CODE
  // useEffect(() => {
  //   const filteredResults = products.filter((product) =>
  //     product.title
  //       .toLowerCase()
  //       .trim()
  //       .includes(searchQuery.toLowerCase().trim())
  //   );

  //   // Update local state
  //   setFilteredProducts(filteredResults);

  //   console.log("The filtered products are: ", filteredResults);
  // }, [searchQuery, products]);

  // ? NEW CODE(OUTDATED)
  // useEffect(() => {
  //   if (products.length > 0 && searchQuery.trim() !== "") {
  //     const normalizedQuery = searchQuery.toLowerCase().trim();

  //     const filteredResults = products.filter((product) => {
  //       const normalizedTitle = product.title.toLowerCase().trim();

  //       // Check if the normalized title includes the normalized query
  //       return (
  //         normalizedTitle.includes(normalizedQuery) ||
  //         normalizedTitle.includes(normalizedQuery + "s") || // Handle plural
  //         normalizedTitle.includes(normalizedQuery.replace(/s$/, "")) // Handle singular
  //       );
  //     });

  //     setFilteredProducts(filteredResults);
  //     console.log("The filtered products are: ", filteredResults);
  //   }
  // }, [searchQuery, products]);

  return (
    <div className="SearchBar-Input-Container">
      <input
        type="search"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && ( // Show button only when there's text
        <button className="clear-btn" onClick={clearSearch}>
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchBar;
