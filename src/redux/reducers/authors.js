import { SET_AUTHORS, ADD_AUTHOR } from "../actions/actionTypes";

const initialState = {
  authors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.payload,
        filteredAuthors: action.payload,
        loading: false
      };
    case ADD_AUTHOR:
      return {
        ...state,
        authors: [action.payload].concat(state.authors)
      };
    default:
      return state;
  }
};

export default reducer;
