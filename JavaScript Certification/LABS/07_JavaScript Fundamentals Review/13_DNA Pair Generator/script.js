const pairElement = (str) => {
  const arrOfPairedArrs = [];

  for (const char of str) {
    const pairedArr = [char];

    switch (char) {
      case "A":
        pairedArr.push("T");
        break;
      case "T":
        pairedArr.push("A");
        break;
      case "C":
        pairedArr.push("G");
        break;
      case "G":
        pairedArr.push("C");
        break;
    }

    arrOfPairedArrs.push(pairedArr);
  }

  return arrOfPairedArrs;
};
