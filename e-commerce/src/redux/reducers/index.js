// File designed to combined multiple reducers
import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import searchReducer from "./searchReducer";
import categoryReducer from "./categoryReducer";

// Create a constant with all the reducers
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
  search: searchReducer,
  category: categoryReducer,
});

export default reducers;
