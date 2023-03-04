// File designed to combined multiple reducers
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

// Create a constant with all the reducers
const reducers = combineReducers({
  allProducts: productReducer,
});

export default reducers;
