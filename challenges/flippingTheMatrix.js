function flippingMatrix(matrix) {
  let bigger = 0;
  const n = matrix.length

  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      bigger += Math.max(matrix[i][j], matrix[i][n - j - 1], matrix[n - i - 1][j], matrix[n - i - 1][n - j - 1]);
    }
  }

  return bigger;
}

const matrixOne = [
  [1, 2],
  [3, 4],
];

const matrixTwo = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

console.log(flippingMatrix(matrixOne));
console.log(flippingMatrix(matrixTwo));