import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        authors: action.payload,
        filteredAuthors: action.payload,
        loading: false
      };
    case actionTypes.POST_AUTHOR:
      return {
        ...state,
        authors: [action.payload].concat(state.authors)
      };
    default:
      return state;
  }
};

export default reducer;
