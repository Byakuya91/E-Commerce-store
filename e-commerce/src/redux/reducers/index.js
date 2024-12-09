// File designed to combined multiple reducers
import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

// Create a constant with all the reducers
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
});

export default reducers;
