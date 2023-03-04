import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index";

// intialize the store.
// Create store takes a few arguments:
// the Reducers, Middleware, state
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
