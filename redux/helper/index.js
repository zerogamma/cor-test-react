export const checkSide = (matrix, x, y, direction, word) => {
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
