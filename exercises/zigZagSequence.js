function zigZagSequence(a, n) {
  const sortedArray= a.sort((a, b) => a - b);
  const k = Math.floor((n + 1) / 2) - 1;
  const middle = sortedArray[k]
  const last = sortedArray[n - 1]

  sortedArray[k] = last
  sortedArray[n - 1] = middle

  const firstPart = sortedArray.slice(0, k + 1);
  const lastPart = sortedArray.slice(k + 1, n + 1).sort((a, b) => b - a);

  const zigZagArray = [...firstPart, ...lastPart]
  let result = '';
  
  zigZagArray.forEach((number, i) => {
      result += `${number}${i === zigZagArray.length - 1 ? '' : ' '}`
  });
  
  return process.stdout.write(result)
}

const arrayOne = [2, 3, 5, 1, 4];
const arrayTwo = [2, 3, 5, 1, 4, 6, 7];

zigZagSequence(arrayOne, 5)
zigZagSequence(arrayTwo, 7)