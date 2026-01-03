const bouncer = (arr) => {
  const truthyArr = [];

  for (const elem of arr) {
    if (elem) {
      truthyArr.push(elem);
    }
  }

  return truthyArr;
};
