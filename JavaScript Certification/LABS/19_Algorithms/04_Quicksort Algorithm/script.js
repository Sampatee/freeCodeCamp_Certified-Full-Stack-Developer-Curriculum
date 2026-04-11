const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = Math.floor(arr.length / 2);
  const lessThanPivot = [];
  const moreThanPivot = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) {
      continue;
    }
    if (arr[i] < arr[pivot]) {
      lessThanPivot.push(arr[i]);
    } else {
      moreThanPivot.push(arr[i]);
    }
  }

  return [...quicksort(lessThanPivot), arr[pivot], ...quicksort(moreThanPivot)];
};
