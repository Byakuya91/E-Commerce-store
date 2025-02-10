const initialState = {
  category: "All", // Default to "All" categories
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
