import React from "react";
// ? Actions from reducer
import { ActionTypes } from "../constants/action-types";

// ? Actions to send to reducer for the cart.

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
};
