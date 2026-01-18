const myReplace = (sentence, toReplace, replaceWith) => {
  const regex = new RegExp(toReplace);
  return sentence.replace(
    regex,
    (match) =>
      match === match.toLowerCase() //to check if match was already in lowerCase
        ? replaceWith
            .split("")
            .map((letter, index) =>
              index === 0 ? letter.toLowerCase() : letter,
            )
            .join("") //to convert even if replaceWith is provided with upperCase
        : replaceWith
            .split("")
            .map((letter, index) =>
              index === 0 ? letter.toUpperCase() : letter,
            )
            .join(""), //to convert even if replaceWith is provided with lowerCase
  );
};
