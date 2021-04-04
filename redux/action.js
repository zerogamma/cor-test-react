import { FETCH_DATA, SELECT_MATRIX, FIND_WORD } from "./actionTypes";

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
