// A reducer takes the intial state and actions of the data.

import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
  selectedCategory: "All",
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.SET_CATEGORY:
      return { ...state, selectedCategory: payload };
    default:
      return state;
  }
};

// takes in two parameters: the state and the action
// Add reducer to index.js
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    // break;
    default:
      return state;
  }
};
