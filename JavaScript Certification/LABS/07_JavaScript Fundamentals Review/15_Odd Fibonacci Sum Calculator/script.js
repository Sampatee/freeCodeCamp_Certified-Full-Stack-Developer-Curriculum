const sumFibs = (ceil) => {
  let currNumMinus2 = 0;
  let currNumMinus1 = 1;
  let sumOfOdds = 0;

  while (currNumMinus1 <= ceil) {
    const currNum = currNumMinus2 + currNumMinus1;

    if (currNumMinus1 % 2 !== 0) {
      sumOfOdds += currNumMinus1;
    }

    currNumMinus2 = currNumMinus1;
    currNumMinus1 = currNum;
  }

  return sumOfOdds;
};
