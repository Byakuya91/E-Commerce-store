// TODO: Code out the wishlist reducer

import { ActionTypes } from "../constants/action-types";

const wishListState = {
  products: [], //? Array to hold products in the cart
};

console.log("the whishList state is: ", wishListState);

export const wishlistReducer = (state = wishListState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_WISHLIST: {
      //? Check if the product is already in the wishlist(DONE)
      // variable to hold products
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      //? Add the product if it isn't in the wishList(DONE)
      if (!existingProduct) {
        // If it doesn't exist, add it to the wishlist
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

      // ? if the product is already within the wishList
      return state; // Return the state unchanged if the product is already in the wishlist
    }

    case ActionTypes.REMOVE_FROM_WISHLIST: {
      // Remove the product from the wishlist by id
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    }

    default:
      return state; // Return current state if no matching action
  }
};
