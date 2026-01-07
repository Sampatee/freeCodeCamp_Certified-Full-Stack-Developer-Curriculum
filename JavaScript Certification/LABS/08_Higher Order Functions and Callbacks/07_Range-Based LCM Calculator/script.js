const smallestCommons = (range) => {
  let arrOfNums = [];
  const primeFactors = [];

  //sort the range and create the nums arr from it
  range.sort((a, b) => a - b);

  for (let i = range[0]; i <= range[1]; i++) {
    arrOfNums.push(i);
  }

  //create the prime factors arr
  let divisor = 2;

  //run loop while there exist nums that are not factorised in the nums arr
  while (!arrOfNums.every((num) => num === 1)) {
    //check if divisor is not prime
    if (!isPrime(divisor)) {
      divisor++;
      continue;
    } else if (arrOfNums.some((num) => num % divisor === 0)) {
      //change those nums to quotient after factorising
      arrOfNums = arrOfNums.map((num) =>
        num % divisor === 0 ? num / divisor : num
      );
      primeFactors.push(divisor);
    } else {
      divisor++;
    }
  }

  //return the LCM from prime factors arr
  return primeFactors.reduce((acc, curr) => acc * curr, 1);
};

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
