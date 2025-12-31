const findLongestWordLength = (sentence) => {
  const words = sentence.trim().split(" ");
  let longestWordLength = 0;

  for (const word of words) {
    if (word !== " " && word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }
  return longestWordLength;
};
