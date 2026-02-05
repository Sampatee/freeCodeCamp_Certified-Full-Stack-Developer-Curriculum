const addTogether = (num1, ...rest) => {
  if (typeof num1 !== "number") {
    return;
  }

  //if only 1 arg is provided(valid), return func
  if (!rest.length) {
    return (num2) => {
      if (typeof num2 === "number") {
        return num1 + num2;
      }
    };
  }

  const num2 = rest[0];
  if (typeof num2 === "number") {
    return num1 + num2;
  }
};
