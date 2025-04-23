// TODO: Create action types to add and remove products from wishlist(ONGOING)

// ? action types import
import { ActionTypes } from "../constants/action-types";

export const addToWishList = (product) => {
  return {
    type: ActionTypes.ADD_TO_WISHLIST,
    payload: product,
  };
};

export const removeFromWishList = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_WISHLIST,
    payload: productId,
  };
};
