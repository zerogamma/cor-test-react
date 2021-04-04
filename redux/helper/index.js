//Used to find just the word "O I E"
export const checkWord = (matrix, x, y, direction, word) => {
  try {
    const validation = {
      up: function(matrix, x, y, word) {
        return matrix[y - 1][x] === word[1] && matrix[y - 2][x] === word[2]
          ? true
          : false;
      },
      upright: function(matrix, x, y, word) {
        return matrix[y - 1][x + 1] === word[1] &&
          matrix[y - 2][x + 2] === word[2]
          ? true
          : false;
      },
      right: function(matrix, x, y, word) {
        return matrix[y][x + 1] === word[1] && matrix[y][x + 2] === word[2]
          ? true
          : false;
      },
      rightdown: function(matrix, x, y, word) {
        return matrix[y + 1][x + 1] === word[1] &&
          matrix[y + 2][x + 2] === word[2]
          ? true
          : false;
      },
      down: function(matrix, x, y, word) {
        return matrix[y + 1][x] === word[1] && matrix[y + 2][x] === word[2]
          ? true
          : false;
      },
      downleft: function(matrix, x, y, word) {
        return matrix[y + 1][x - 1] === word[1] &&
          matrix[y + 2][x - 2] === word[2]
          ? true
          : false;
      },
      left: function(matrix, x, y, word) {
        return matrix[y][x - 1] === word[1] && matrix[y][x - 2] === word[2]
          ? true
          : false;
      },
      leftup: function(matrix, x, y, word) {
        return matrix[y - 1][x - 1] === word[1] &&
          matrix[y - 2][x - 2] === word[2]
          ? true
          : false;
      }
    };
    return validation[direction](matrix, x, y, word);
  } catch (e) {
    return false;
  }
};

//Used to find any word
export const checkRandomWord = (matrix, x, y, direction, word) => {
  try {
    const validation = {
      up: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y - (i + 1)][x] === v)
          .includes(false);
      },
      upright: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y - (i + 1)][x + (i + 1)] === v)
          .includes(false);
      },
      right: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y][x + (i + 1)] === v)
          .includes(false);
      },
      rightdown: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y + (i + 1)][x + (i + 1)] === v)
          .includes(false);
      },
      down: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y + (i + 1)][x] === v)
          .includes(false);
      },
      downleft: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y + (i + 1)][x - (i + 1)] === v)
          .includes(false);
      },
      left: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y][x - (i + 1)] === v)
          .includes(false);
      },
      leftup: function(matrix, x, y, word) {
        const validate = [...word];
        validate.shift();
        return !validate
          .map((v, i) => matrix[y - (i + 1)][x - (i + 1)] === v)
          .includes(false);
      }
    };
    return validation[direction](matrix, x, y, word);
  } catch (e) {
    return false;
  }
};
