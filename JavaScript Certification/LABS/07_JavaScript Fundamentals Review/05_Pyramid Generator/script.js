const pyramid = (char, rows, isInverted) => {
  let pyramid = `\n`;

  if (!isInverted) {
    for (let i = 1; i <= rows; i++) {
      pyramid += " ".repeat(rows - i) + char.repeat(2 * i - 1) + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      pyramid += " ".repeat(rows - i) + char.repeat(2 * i - 1) + "\n";
    }
  }

  return pyramid;
};
