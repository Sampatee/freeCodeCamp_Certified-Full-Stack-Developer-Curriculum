const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

const golfScore = (par, numOfStrokes) => {
  let nameIndex = null;

  switch (true) {
    case numOfStrokes === 1:
      nameIndex = 0;
      break;
    case numOfStrokes <= par - 2:
      nameIndex = 1;
      break;
    case numOfStrokes === par - 1:
      nameIndex = 2;
      break;
    case numOfStrokes === par:
      nameIndex = 3;
      break;
    case numOfStrokes === par + 1:
      nameIndex = 4;
      break;
    case numOfStrokes === par + 2:
      nameIndex = 5;
      break;
    case numOfStrokes > par + 3:
      nameIndex = 6;
      break;
  }
  return names[nameIndex];
};

console.log(golfScore(1, 1));
