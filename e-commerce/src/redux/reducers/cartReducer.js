import React from "react";

// ? Actions from reducer
import { ActionTypes } from "../constants/action-types";

const cartState = {
  // array to hold the products and a total
  products: [],
  total: 0,
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload], //? Add the new product to the array
        total: state.total + action.payload.price, //? Update the total
      };

    case ActionTypes.REMOVE_FROM_CART:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      //   locating the product by ID and removing it
      const removedItem = state.items.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        items: filteredItems, //? Remove the product from the array
        total: removedItem ? state.total - removedItem.price : state.total, //? Adjust the total
      };

    default:
      return state; // Return the current state if action type doesn't match
  }
};
