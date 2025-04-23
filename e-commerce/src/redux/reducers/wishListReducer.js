// TODO: Code out the wishlist reducer

import { ActionTypes } from "../constants/action-types";

const wishListState = {
  products: [], // Array to hold products in the cart
};

export const wishListReducer = (state = wishListState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_WISHLIST:
      return {
        // ? Check if a product exists(ONGOING)
        ...state,
        products: [...state.products, action.payload],

        // ? if it doesn't exist, add it to the wishList
        // ? Return the state unchanged if the product is already in the wishList
      };

      break;

    default:
      break;
  }
};
