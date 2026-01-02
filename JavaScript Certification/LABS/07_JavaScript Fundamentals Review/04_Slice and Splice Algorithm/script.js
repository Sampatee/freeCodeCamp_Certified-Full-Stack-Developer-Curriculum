//using .splice()
/*
const frankenSplice = (arr1, arr2, index) => {
  const mergedArr = [...arr2];
  mergedArr.splice(index, 0, ...arr1);
  return mergedArr;
};
*/

//without using .splice()
const frankenSplice = (arr1, arr2, index) => {
  const mergedArr = [];

  //failsafe if arr2 is empty and arr2-for-of loop doesn't run
  if (!arr2.length) {
    for (const elem of arr1) {
      mergedArr.push(elem);
    }
  }

  for (const elem of arr2) {
    if (arr2.indexOf(elem) === index) {
      for (const elem of arr1) {
        mergedArr.push(elem);
      }
    }

    mergedArr.push(elem);
  }

  return mergedArr;
};
