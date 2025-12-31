const chunkArrayInGroups = (arr, num) => {
  let mainArr = [];
  let chunkArr = [];

  for (const elem of arr) {
    chunkArr.push(elem);

    /*if chunkArr length reaches num OR elem is
    the last element of arr, then push chunkArr to
    mainArr and reset chunkArr*/
    if (chunkArr.length === num || arr[arr.length - 1] === elem) {
      mainArr.push(chunkArr);
      chunkArr = [];
    }
  }

  return mainArr;
};
