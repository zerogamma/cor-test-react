import { FIND_WORD } from "../actionTypes";
import { checkSide } from "../helper";

const initialState = {
  finded_word: 0,
  word: ["O", "I", "E"]
};

const directions = [
  "up",
  "upright",
  "right",
  "rightdown",
  "down",
  "downleft",
  "left",
  "leftup"
];

export default function(state = initialState, action) {
  switch (action.type) {
    case FIND_WORD: {
      console.log(state);
      console.log(action.payload);
      const result = findWord(action.payload, state.word);
      console.log(result);
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

//checkSide(matrix, x, y, direction, word)
const findWord = (matrix, word) => {
  const test = matrix.reduce((result, row, y) => {
    const rowWordFind = row.reduce((result, column, x) => {
      debugger;
      if (column !== word[0]) return (result += 0);
      let countFind = 0;
      directions.forEach(direction => {
        // console.log(direction);
        if (checkSide(matrix, x, y, direction, word)) countFind += 1;
      });
      return (result += countFind);
    }, 0);
    return (result += rowWordFind);
  }, 0);

  return test;
  console.log(`probando log -- ${test}`);
};
