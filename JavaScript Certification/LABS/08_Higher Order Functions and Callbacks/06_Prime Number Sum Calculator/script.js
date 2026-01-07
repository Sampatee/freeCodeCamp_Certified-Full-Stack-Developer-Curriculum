const sumPrimes = (num) => {
  let sumOfPrimes = 0;

  if (num < 2) {
    return 0;
  }

  outerLoop: for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        continue outerLoop;
      }
    }

    sumOfPrimes += i;
  }

  return sumOfPrimes;
};
