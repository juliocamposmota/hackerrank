function countingSort(arr) {
    const newArray = [];
    for (var i = 0; i <= Math.max(...arr); i++) {
        newArray.push(i);
    }

    return newArray.map((_element, index) => {
        let counter = 0;

        arr.forEach((el) => {
            if (el === index) {
                counter += 1
            }
        });

        return counter;
    });
}

const ARRAY_SIZE = 10;
const arrayOne = [];

for (var i = 0; i < ARRAY_SIZE; i++) {
  var randomNumber = Math.floor(Math.random() * (ARRAY_SIZE + 1));
  arrayOne.push(randomNumber);
}

console.log('array one: ', arrayOne);
console.log(countingSort(arrayOne));