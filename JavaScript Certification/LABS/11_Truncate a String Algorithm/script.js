const truncateString = (str, limit) => {
  return str.length > limit ? str.slice(0, limit) + "..." : str;
};

console.log(truncateString("Absolutely Longer", 2));
