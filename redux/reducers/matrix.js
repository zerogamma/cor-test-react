import { FETCH_DATA, SELECT_MATRIX } from "../actionTypes";
import { getResources } from "../../service";

const initialState = {
  matrixs: [],
  countMatrix: 0,
  selectedMatrix: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      let fetched = [];
      getResources().then(value => (fetched = value.resources));

      return {
        ...state,
        matrixs: fetched,
        countMatrix: fetched.length
      };
    }
    case SELECT_MATRIX: {
      return {
        ...state,
        selectedMatrix: matrix.lenght !== 0 ? matrixs[action.payload] : []
      };
    }
    default:
      return state;
  }
}
