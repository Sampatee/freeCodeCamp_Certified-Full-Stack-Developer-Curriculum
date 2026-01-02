//using .find()
/*
const findElement = (arr, testFunc) => arr.find(testFunc);
*/

//without using .find()
const findElement = (arr, testFunc) => {
  for (const elem of arr) {
    if (testFunc(elem)) {
      return elem;
    }
  }
};
