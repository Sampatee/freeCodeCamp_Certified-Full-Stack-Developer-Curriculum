const mutation = (arr) => {
  for (const char of arr[1].toLowerCase()) {
    if (!arr[0].toLowerCase().includes(char)) {
      return false;
    }
  }

  return true;
};
