//1
const steamrollArray = (nestedArr) => {
  const arr = [];

  for (const elem of nestedArr) {
    if (!Array.isArray(elem)) {
      arr.push(elem);
    } else {
      arr.push(...steamrollArray(elem));
    }
  }

  return arr;
};

//2
const flattenArr = (nestedArr) => {
  const arr = nestedArr.reduce((acc, curr) => {
    if (!Array.isArray(curr)) {
      acc.push(curr);
      return acc;
    } else {
      acc.push(...flattenArr(curr));
      return acc;
    }
  }, []);

  return arr;
};
