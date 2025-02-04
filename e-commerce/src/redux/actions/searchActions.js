// ? Creating a new set of Actions for searching within the store.Js file.
// ? Analogy: the actions are the request forms of a library. When you need to change or fill out a request(action) form, you send it to the library.

// ? action types import
import { ActionTypes } from "../constants/action-types";

export const setSearchQuery = (query) => ({
  type: ActionTypes.SET_SEARCH_QUERY,
  payload: query,
});
