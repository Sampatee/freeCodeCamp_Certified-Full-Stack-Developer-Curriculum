const countdown = (n) => {
  if (n < 1) {
    return [];
  }

  const countArr = countdown(n - 1);
  countArr.unshift(n);
  return countArr;
};
