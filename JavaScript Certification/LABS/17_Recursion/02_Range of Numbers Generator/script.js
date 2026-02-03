const rangeOfNumbers = (startNum, endNum) => {
  if (startNum === endNum) {
    return [startNum];
  }

  const rangeArr = rangeOfNumbers(startNum, endNum - 1);
  rangeArr.push(endNum);
  return rangeArr;
};
