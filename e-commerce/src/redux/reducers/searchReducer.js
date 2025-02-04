// searchReducer.js
const initialState = {
  query: "", // Starting with an empty search
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        query: action.payload, // Update the search query
      };
    default:
      return state; // If the action doesn't match, do nothing
  }
};

export default searchReducer;
