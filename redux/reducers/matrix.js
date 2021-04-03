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
      const fetched = getResources();
      return {
        ...state,
        matrixs: fetched.resources,
        countMatrix: fetched.resources.length,
        selectedMatrix:
          fetched.resources.lenght !== 0 ? fetched.resources[0] : []
      };
    }
    case SELECT_MATRIX: {
      return {
        ...state,
        selectedMatrix:
          state.matrixs.lenght !== 0 ? state.matrixs[action.payload] : []
      };
    }
    default:
      return state;
  }
}
