// A reducer takes the intial state and actions of the data.

import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [
    {
      id: 1,
      title: "Neil",
      category: "programmer",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
