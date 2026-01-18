const spinalCase = (str) => {
  const regex = /[A-Z]?[a-z]+/g;
  return str
    .match(regex)
    .map((word) => word.toLowerCase())
    .join("-");
};
