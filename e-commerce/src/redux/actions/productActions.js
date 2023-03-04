// GOAL: create three actions
//  1) One will be for the SET_PRODUCTS
//  2) The other will be for the SELECTED_PRODUCTS
//  3) The other will be for REMOVE_SELECTED PRODUCTS

import { ActionTypes } from "../constants/action-types";
export const setProducts = (products) => {
  // Action always returns a JS object with a TYPE and PAYLOAD
  return {
    // The kind of action you want to perform based on action-types.js
    type: ActionTypes.SET_PRODUCTS,
    // The data being sent
    payload: products,
  };
};

export const selectedProducts = (product) => {
  // Action always returns a JS object with a TYPE and PAYLOAD
  return {
    // The kind of action you want to perform based on action-types.js
    type: ActionTypes.SELECTED_PRODUCT,
    // The data being sent
    payload: product,
  };
};
