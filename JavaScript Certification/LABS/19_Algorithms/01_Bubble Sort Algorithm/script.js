// 1.
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) return arr;
  }
};

// 2.
/* 
const bubbleSort = (arr) => {
  let swapped = true;

  while (swapped) {
    let i = 0;
    swapped = false;

    while (i < arr.length) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }

      i++;
    }
  }

  return arr;
};
 */
