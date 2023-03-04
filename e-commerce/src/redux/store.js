import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index";

// intialize the store.
// Create store takes a few arguments:
// the Reducers, Middleware, state
const store = createStore(reducers, {});

export default store;
