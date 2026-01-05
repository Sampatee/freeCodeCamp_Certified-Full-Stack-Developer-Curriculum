//1
const dropElements = (arr, func) => {
  for (const elem of arr) {
    if (func(elem)) {
      return arr.slice(arr.indexOf(elem));
    }
  }

  return [];
};

//2
/*
const dropElements = (arr, func) => {
  const slicedArr = [];

  for (const elem of arr) {
    if (func(elem) || slicedArr.length) {
      slicedArr.push(elem);
    }
  }

  return slicedArr;
};
*/
