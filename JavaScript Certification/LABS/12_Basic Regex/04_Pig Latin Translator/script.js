const translatePigLatin = (str) => {
  const consonantStrtRegex = /(^[^aeiou]+(?=[aeiou]))([aeiou]\w+)/;
  const vowelStrtRegex = /^[aeiou]/;

  return consonantStrtRegex.test(str)
    ? str.replace(consonantStrtRegex, "$2$1ay")
    : vowelStrtRegex.test(str)
      ? str + "way"
      : str + "ay";
};
