import { FETCH_DATA, SELECT_MATRIX } from "../actionTypes";
import { getResources, getResourcesUsingFetch } from "../../service";

const initialState = {
  matrixs: [],
  countMatrix: 0,
  selectedMatrix: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      const fetched = getResourcesUsingFetch();
      const fetchedMatrix = fetched.resources || getResources().resources;

      debugger;

      return {
        ...state,
        matrixs: fetchedMatrix,
        countMatrix: fetchedMatrix.length,
        selectedMatrix: fetchedMatrix.length !== 0 ? fetchedMatrix[0] : []
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
