// ?React imports
import React from "react";

// ? Redux imports
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../redux/actions/categoryActions";

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
  const selectedCategory = useSelector((state) => state.category.category);

  // ?STEP FOUR: create a function to handle category change

  const handleCategoryChange = (event) => {
    categoryDispatch(setCategoryFilter(event.target.value)); // Send action to Redux
  };

  console.log(
    "Redux State:",
    useSelector((state) => state)
  );

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
