const diffArray = (arr1, arr2) =>
  [...arr1, ...arr2].filter(
    (elem) => !(arr1.includes(elem) && arr2.includes(elem))
  );
