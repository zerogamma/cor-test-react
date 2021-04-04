import { FIND_WORD } from "../actionTypes";
import { checkSide } from "../helper";

const initialState = {
  finded_word: 0,
  word: ["O", "I", "E"]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FIND_WORD: {
      console.log(state);
      console.log(action.payload);
      findWord(action.payload, state.word);
      const result = checkSide(action.payload, 0, 0, "right", state.word);
      console.log(result);
      debugger;
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

const findWord = (matrix, word) => {
  const test = matrix.map((row, i) =>
    row.map((column, j) => {
      if (column !== word[0]) return;

      return 0;
    })
  );
  console.log(`probando log -- ${test}`);
};
