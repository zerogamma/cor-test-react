import { FETCH_DATA, SELECT_MATRIX, FIND_WORD, NEW_WORD } from "./actionTypes";

export const fetch_data = () => ({
  type: FETCH_DATA,
  payload: {}
});

export const select_matrix = selected => ({
  type: SELECT_MATRIX,
  payload: selected
});

export const find_word = matrix => ({
  type: FIND_WORD,
  payload: matrix
});

export const new_word = word => ({
  type: NEW_WORD,
  payload: word
});
