const getIndexToIns = (arr, num) => {
  arr.sort((a, b) => a - b);
  const insIndex = arr.findIndex((arrNum) => arrNum >= num);

  if (insIndex === -1 && arr.length) {
    return arr.length;
  }

  if (insIndex === -1) {
    return 0;
  }

  return insIndex;
};
