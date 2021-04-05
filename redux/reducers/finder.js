import { FIND_WORD, NEW_WORD } from "../actionTypes";
import { checkWord, checkRandomWord } from "../helper";

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
      const result = findWord(action.payload, state.word);
      return {
        ...state,
        finded_word: result
      };
    }
    case NEW_WORD: {
      return {
        ...state,
        word: action.payload
      };
    }
    default:
      return state;
  }
}

const findWord = (matrix, word) => {
  const countWordFind = matrix.reduce((result, row, y) => {
    return (result += row.reduce((result, column, x) => {
      if (column !== word[0]) return (result += 0);
      let countFind = 0;
      directions.forEach(direction => {
        if (changeTypeWordFinder(matrix, x, y, direction, word)) countFind += 1;
      });
      return (result += countFind);
    }, 0));
  }, 0);

  return countWordFind;
};

const changeTypeWordFinder = (matrix, x, y, direction, word) => {
  const validationFunction = {
    OIE: function(matrix, x, y, direction, word) {
      return checkWord(matrix, x, y, direction, word);
    }
  };
  return validationFunction[word]
    ? validationFunction[word](matrix, x, y, word)
    : checkRandomWord(matrix, x, y, direction, word);
};
