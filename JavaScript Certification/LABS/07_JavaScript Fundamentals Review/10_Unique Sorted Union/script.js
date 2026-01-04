const uniteUnique = (...arrOfArrs) => {
  const uniqueArr = [];

  for (const arr of arrOfArrs) {
    for (const elem of arr) {
      if (!uniqueArr.includes(elem)) {
        uniqueArr.push(elem);
      }
    }
  }

  return uniqueArr;
};
