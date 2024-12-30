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

const ProductListing = () => {
  // Fetch the product listed in the store.Js
  const products = useSelector((state) => state);
  // Dispatch the action through useDispatch: A redux hook
  const dispatch = useDispatch();
  // loading state
  const [loading, setLoading] = useState(true); // Add loading state

  // console.log("the loading state is: ", loading);

  // TODOs:
  //  1) Create API function and UseEffect(DONE)
  // 2) Test to see if the API is working(DONE)
  // 3) Connect the API data to the store inside our Application(DONE)

  // 1) API function
  const retrieveProducts = async () => {
    // console.log("Before API call, loading state:", loading);
    console.time("API fetch time");
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
      setLoading(false); // Set loading to false once data is fetched
    } catch (err) {
      console.error("Error fetching products", err);
      setLoading(false); // Ensure loading state is updated even on error
    }
    // console.log("After API call, loading state:", loading);
    console.timeEnd("API fetch time");
  };

  // 2) Call the retrieveProducts through a UseEffect
  useEffect(() => {
    retrieveProducts();
  }, []);

  // Checking API and state flow
  // console.log("Products from Redux store:", products);

  // if (loading) {
  //   return <div>Loading product details...</div>;
  // }

  return (
    <div className="ui grid container">
      {loading ? (
        <Vortex
          type="vortex"
          colors={["#e15b64", "#f47e60", "#f8d663", "#abbd81", "#849b87"]}
          height={80}
          width={80}
          visible={loading}
        />
      ) : (
        <ProductComponent />
      )}
    </div>
  );
};

export default ProductListing;
