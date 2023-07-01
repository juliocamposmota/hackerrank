function lonelyinteger(a) {
    // Write your code here
    let lonelyNumber
    a.forEach((number) => {
        let numberCount = 0
        a.forEach((item) => {
            if (number === item) numberCount += 1
        })

        if (numberCount === 1) lonelyNumber = number
    })

    return lonelyNumber
}

const array1 = [1, 2, 3, 4, 3, 2, 1, 5, 5]

console.log(lonelyinteger(array1))