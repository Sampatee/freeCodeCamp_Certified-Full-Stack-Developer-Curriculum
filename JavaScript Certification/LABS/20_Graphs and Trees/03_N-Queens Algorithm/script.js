const dfsNQueens = (n) => {
  if (n < 1) return [];

  const list = [];
  let result = [];
  const stack = Array.from({ length: n }, (_, i) => [0, i]); //init stacj with every col in 1st row

  while (stack.length > 0) {
    const [row, col] = stack.pop();
    result = result.slice(0, row); //reset result

    result.push(col);

    //get the positive and negative diagonals of all the present queens
    const posDiag = result.map((c, r) => r + c);
    const negDiag = result.map((c, r) => r - c);

    //get all the possible positions for the Queen in next row and push them in stack
    for (let nextCol = 0; nextCol < n; nextCol++) {
      if (
        !result.includes(nextCol) &&
        !posDiag.includes(row + 1 + nextCol) &&
        !negDiag.includes(row + 1 - nextCol)
      ) {
        stack.push([row + 1, nextCol]);
      }
    }

    //if result reaches length n, list it as possible arrangement
    if (result.length === n) {
      list.push(result);
    }
  }

  return list.reverse(5);
};
