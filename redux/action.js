import { FETCH_DATA, SELECT_MATRIX } from "./actionTypes";

export const fetch_data = () => ({
  type: FETCH_DATA,
  payload: {}
});

export const select_matrix = selected => ({
  type: SELECT_MATRIX,
  payload: { selected }
});
