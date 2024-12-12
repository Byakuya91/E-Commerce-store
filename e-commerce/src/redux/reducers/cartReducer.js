import React from "react";

// ? Actions from reducer
import { ActionTypes } from "../constants/action-types";

const cartState = {
  // Array to hold the products and the total price
  products: [],
  total: 0,
};

export const cartReducer = (state = cartState, action) => {
  console.log("Current State:", state);
  console.log("Action Dispatched:", action);

  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload], // Add the new product to the array
        total: state.total + action.payload.price, // Update the total
      };

    case ActionTypes.REMOVE_FROM_CART:
      const filteredProducts = state.products.filter(
        (item) => item.id !== action.payload
      );
      // Locate the product by ID to remove it
      const removedProduct = state.products.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        products: filteredProducts, // Remove the product from the array
        total: removedProduct
          ? state.total - removedProduct.price
          : state.total, // Adjust the total
      };

    default:
      return state; // Return the current state if the action type doesn't match
  }
};
