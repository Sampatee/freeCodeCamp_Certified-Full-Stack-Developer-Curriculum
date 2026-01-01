const repeatStringNumTimes = (str, num) => {
  let repeatedStr = "";

  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
};
