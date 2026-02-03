const permuteString = (str, prefix = "", results = []) => {
  if (!str.length) {
    results.push(prefix);
    return results;
  }

  for (const char of str) {
    permuteString(str.replace(char, ""), char).forEach((rightPerm) => {
      const perm = prefix + rightPerm;
      if (!results.includes(perm)) {
        results.push(perm);
      }
    });
  }

  return results;
};
