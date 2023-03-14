// File designed to combined multiple reducers
import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

// Create a constant with all the reducers
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
