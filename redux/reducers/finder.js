import { FIND_WORD } from "../actionTypes";

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

const checkSequence = (matrix, currentY, currentX, word) => {};

const checkSide = (matrix, x, y, direction, word) => {
  try {
    switch (direction) {
      case "up":
        if (matrix[y - 1][x] !== word[1] && matrix[y - 2][x] !== word[2])
          return false;
        return true;
      case "upright":
        if (
          matrix[y - 1][x + 1] !== word[1] &&
          matrix[y - 2][x + 2] !== word[2]
        )
          return false;
        return true;
      case "right":
        debugger;
        if (matrix[y][x + 1] !== word[1] && matrix[y][x + 2] !== word[2])
          return false;
        return true;
      case "rightdown":
        if (
          matrix[y + 1][x + 1] !== word[1] &&
          matrix[y + 2][x + 2] !== word[2]
        )
          return false;
        return true;
      case "down":
        if (matrix[y + 1][x] !== word[1] && matrix[y + 2][x] !== word[2])
          return false;
        return true;
      case "downleft":
        if (
          matrix[y + 1][x - 1] !== word[1] &&
          matrix[y + 2][x - 2] !== word[2]
        )
          return false;
        return true;
      case "left":
        if (matrix[y][x - 1] !== word[1] && matrix[y][x - 2] !== word[2])
          return false;
        return true;
      case "leftup":
        if (
          matrix[y - 1][x - 1] !== word[1] &&
          matrix[y - 2][x - 2] !== word[2]
        )
          return false;
        return true;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
};
