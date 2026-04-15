function fibonacci(n) {
  const sequence = [0, 1];

  //build the seq. array upto n
  for (let i = 2; i < n + 1; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[n];
}
