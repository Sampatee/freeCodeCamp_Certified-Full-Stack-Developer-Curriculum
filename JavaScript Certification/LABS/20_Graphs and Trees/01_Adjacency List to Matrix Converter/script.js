const adjacencyListToMatrix = (list) => {
  const n = Object.keys(list).length;
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (list[row].includes(col)) {
        matrix[row][col] = 1;
      }
    }
    console.log(matrix[row]);
  }

  return matrix;
};
