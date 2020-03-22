import { SET_AUTHORS, ADD_AUTHOR, SET_ERRORS } from "./actionTypes";
import { resetErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => async dispatch => {
  try {
    const res = await instance.get("/api/authors/");
    const authors = res.data;
    dispatch({ type: SET_AUTHORS, payload: authors });
  } catch (err) {
    console.error(err);
  }
};

//POST THE AUTHOR TO https://the-index-api.herokuapp.com/api/authors/
export const postAuthor = (newAuthor, closeModal) => async dispatch => {
  try {
    const res = await instance.post("/api/authors/", newAuthor);
    const author = res.data;
    dispatch(resetErrors());
    dispatch({
      type: ADD_AUTHOR,
      payload: author
    });
    closeModal();
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};
