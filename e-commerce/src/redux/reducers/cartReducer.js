// ? Actions from reducer
import { ActionTypes } from "../constants/action-types";

const cartState = {
  products: [], // Array to hold products in the cart
  total: 0, // Total price of the products
};

export const cartReducer = (state = cartState, action) => {
  // console.log("Current State:", state);

  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      // Check if the product already exists in the cart
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        // If it exists, update the quantity
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          total: state.total + action.payload.price, // Update total price
        };
      } else {
        // If it doesn't exist, add it with quantity 1
        return {
          ...state,
          products: [
            ...state.products,
            { ...action.payload, quantity: 1 }, // Add new product with quantity
          ],
          total: state.total + action.payload.price,
        };
      }
    }

    case ActionTypes.REMOVE_FROM_CART: {
      // Find the product to be removed
      const productToRemove = state.products.find(
        (item) => item.id === action.payload
      );

      if (!productToRemove) return state; // If the product is not found, return state

      // Remove the product and update the state
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
        total: state.total - productToRemove.price * productToRemove.quantity, // Adjust total price
      };
    }
    // ?TODO: Action type increment(DONE)
    case ActionTypes.INCREMENT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        total:
          state.total +
          state.products.find((product) => product.id === action.payload).price,
      };

    // ?TODO: Action type decrement(DONE)
    case ActionTypes.DECREMENT_QUANTITY:
      const product = state.products.find(
        (product) => product.id === action.payload
      );

      if (product.quantity === 1) {
        // Remove the product entirely if quantity reaches 0
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
          total: state.total - product.price,
        };
      } else {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
          total: state.total - product.price,
        };
      }

    default:
      return state; // Return the current state if no action matches
  }
};
