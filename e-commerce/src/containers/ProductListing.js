// ?React imports
import React, { useEffect, useState } from "react";
// ?Redux imports
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

// ?third party imports
import axios from "axios";
import { Vortex } from "react-loader-spinner";
// ?component imports
import ProductComponent from "./ProductComponent";
import SearchBar from "../Components/SearchBar/SearchBar"; // Import SearchBar

const ProductListing = () => {
  // Fetch the product listed in the store.Js
  const products = useSelector((state) => state.allProducts.products); // Redux products
  // Dispatch the action through useDispatch: A redux hook
  const dispatch = useDispatch();
  // loading state
  const [loading, setLoading] = useState(true); // Add loading state
  // Search state: Now managed here instead of SearchBar
  const searchQuery = useSelector((state) => state.search.query);
  // SearchBar term
  const [searchTerm, setSearchTerm] = useState("");

  // console.log("the loading state is: ", loading);

  console.log("Redux products state:", products);

  // 1) API function
  // ? Fetch products once the component mounts
  useEffect(() => {
    const retrieveProducts = async () => {
      console.time("API fetch time");
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.error("Error fetching products", err);
        setLoading(false); // Ensure loading state is updated even on error
      }
      console.timeEnd("API fetch time");
    };

    retrieveProducts();
  }, [dispatch]);

  // ?Filter for search(using redux search state)
  const getFilteredProducts = () => {
    if (!searchQuery.trim()) return products; // If search is empty, return all products

    const normalizedQuery = searchQuery.toLowerCase().trim();

    return products.filter((product) => {
      const normalizedTitle = product.title.toLowerCase().trim();
      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedTitle.includes(normalizedQuery + "s") || // Handle plural
        normalizedTitle.includes(normalizedQuery.replace(/s$/, "")) // Handle singular
      );
    });
  };

  return (
    <>
      <div className="ui grid container">
        {/* Pass setSearchTerm to SearchBar */}
        <div>
          <SearchBar />
        </div>
        {loading ? (
          <Vortex
            type="vortex"
            colors={["#e15b64", "#f47e60", "#f8d663", "#abbd81", "#849b87"]}
            height={80}
            width={80}
            visible={loading}
          />
        ) : (
          <div className="ProductListing-grid">
            <ProductComponent filteredProducts={getFilteredProducts()} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductListing;
