export const checkSide = (matrix, x, y, direction, word) => {
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
