
const numArr = [-1, -2, -3, -4, 1, 2, 3, 4, 5, 6]

const resultFind = numArr.find(item => {
    // console.log(item) // it will result undefined
    // return true // it returns -1
    // return false // it returns undefined
    // return item % 2 === 0 // it returns -2
    // return item % 2 !== 0 // it returns -1
    return (item % 2 === 0 && item > 1) // it returns 2   
})
// console.log(resultFind);

const resultFindIndex = numArr.findIndex(item => {
    // return item > 1 // result 5, because 1 is there in fifth index
    // return item % 5 === 0 // it returns -1 that mean not found
    // return item % 3 === 0 // it returns 2 is there in second index
    return (item % 3 === 0 && item > 3) // it returns 9
})

console.log(resultFindIndex);