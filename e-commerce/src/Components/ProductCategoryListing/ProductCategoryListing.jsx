// ?React imports
import React from "react";

// ? Redux imports
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/actions/categoryActions";

// ?STEP ONE: define the categories as a const
const categories = [
  "All",
  "men's clothing",
  "women's clothing",
  "jewelry",
  "electronics",
];

// ?STEP TWO: create a function to handle category change

// ?STEP THREE: create a function to handle category change

const ProductCategoryListing = () => {
  // ? use Usedispatch to dispatch category Actions
  const categoryDispatch = useDispatch();
  // ? use useSelector to access the category state
  const selectedCategory = useSelector(
    (state) => state.allProducts.selectedCategory
  );

  // ?STEP FOUR: create a function to handle category change

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value)); // Send action to Redux
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ProductCategoryListing;
