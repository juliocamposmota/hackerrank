function diagonalDifference(arr) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    arr.forEach((column, i) => {
        column.forEach((row, j) => {
            if (i === j) {
                firstDiagonalSum += row
                secondDiagonalSum += column[column.length - 1 - i]
            }
        });
    });

    console.log('firstDiagonalSum: ', firstDiagonalSum);
    console.log('secondDiagonalSum: ', secondDiagonalSum);

    return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

const arrayOne = [[11, 4, 10],[2, 5, 8],[4, 6, -12]];

console.log(diagonalDifference(arrayOne));