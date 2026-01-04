const sumAll = (range) => {
  const min = Math.min(...range);
  const max = Math.max(...range);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};
