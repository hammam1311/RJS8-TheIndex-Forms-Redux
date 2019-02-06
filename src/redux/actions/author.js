import { SET_AUTHOR_LOADING, SET_AUTHOR_DETAIL } from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthorDetail = authorID => async dispatch => {
  dispatch({
    type: SET_AUTHOR_LOADING
  });
  try {
    const res = await instance.get(`/api/authors/${authorID}/`);
    const author = res.data;
    dispatch({
      type: SET_AUTHOR_DETAIL,
      payload: author
    });
  } catch (err) {}
};

//POST THE BOOK TO https://the-index-api.herokuapp.com/api/books/
export const postBook = (book, closeModal) => async dispatch => {
  try {
    const res = await instance.post("/api/books/", book);
    const newBook = res.data;
    dispatch({
      type: actionTypes.POST_BOOK,
      payload: newBook
    });
    closeModal();
  } catch (err) {
    dispatch({
      type: actionTypes.SET_ERRORS,
      payload: err.response.data
    });
  }
};
