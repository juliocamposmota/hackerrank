function findMedian(arr) {
    // Write your code here
    const sortedArray = arr.sort((a ,b) => a -b)
    const arrayLength = arr.length
    const arrayMiddle = arrayLength % 2 === 0 ? (arrayLength/2) : Math.floor(arrayLength/2)

    console.log('sorted array', sortedArray)
    console.log('array length', arrayLength)
    console.log('array module', arrayLength % 2 === 0)
    console.log('array divided by 2', (arrayLength/2))
    console.log('array divided by 2 floor', Math.floor(arrayLength/2))
    console.log('array middle', arrayMiddle)
    console.log(sortedArray[arrayMiddle])
    
    return sortedArray[arrayMiddle]
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const array2 = [1, 2, 3, 4, 5, 6, 7]

console.log('median: ', findMedian(array))
console.log('median: ', findMedian(array2))