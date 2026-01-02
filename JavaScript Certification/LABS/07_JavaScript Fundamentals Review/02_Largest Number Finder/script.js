const largestOfAll = (arrOfArrs) => {
  const arrOfMax = [];

  for (const arr of arrOfArrs) {
    arrOfMax.push(Math.max(...arr));
  }

  return arrOfMax;
};
