// BASIC EXAMPLE
// let numArr = [1,2,3,4,5]
// const numArrFiltered = numArr.filter(el=>{
//   return el >= 2
//   return el % 2 === 0 // other example

// })
// console.log(numArrFiltered)

let arrObj = [
    {
        name: "Agus",
        age: 20
    },
    {
        name: "eka",
        age: 13
    }
]

const resultArrObj = arrObj.filter(item => {
    // return item.name === "Agus"
    return item.age < 20
})

console.log(resultArrObj)
console.log(resultArrObj.map(item => {
    return item.name
}))