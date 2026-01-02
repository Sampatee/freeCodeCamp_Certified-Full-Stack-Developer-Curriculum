/*
const largestOfAll = (arrOfArrs) => {
  const arrOfMax = [];

  for (const arr of arrOfArrs) {
    arrOfMax.push(Math.max(...arr));
  }

  return arrOfMax;
};
*/

//without Math.max()
const largestOfAll = (arrOfArrs) => {
  const arrOfMax = [];

  for (const arr of arrOfArrs) {
    let maxNum = -Infinity;

    for (const num of arr) {
      if (num > maxNum) {
        maxNum = num;
      }
    }

    arrOfMax.push(maxNum);
  }

  return arrOfMax;
};
