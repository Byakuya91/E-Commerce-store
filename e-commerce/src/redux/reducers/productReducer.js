// A reducer takes the intial state and actions of the data.

import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
