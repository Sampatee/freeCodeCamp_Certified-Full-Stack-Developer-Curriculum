const confirmEnding = (mainStr, subStr) => {
  return mainStr.slice(-subStr.length) === subStr;
};

console.log(confirmEnding("Abstraction", "action"));
