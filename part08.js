console.clear()

let mArr = [1, 2, 3, 4, 5]
// let newArr = []
/*
CARA 1
for (let i = 0; i < mArr.length; i++) {
    newArr.push(mArr[i] * 2)
}
*/

/*
CARA 2
const doubleValues = (item) => {
    return item * 2;
}
for (let i = 0; i < mArr.length; i++) {
    newArr.push(doubleValues(mArr[i]))
}
*/
// menggunakan map()
// let newArr = mArr.map((item, i) => {
//     // console.log(item)
//     console.log(`item of position ${i} is ${item}`)
//     return item * 2
// })
// console.log(newArr);
let arrObj = [
    {
        name: "Agus",
        address: "Cirebon",
        age: 20
    },
    {
        name: "Eka",
        address: "Tegal",
        age: 15
    },
    {
        name: "Yati",
        address: "Jakarta",
        age: 25
    },
]

const newArrObj = arrObj.map(data => {
    console.log(data);
    // return
    return {
        name: data.name,
        address: data.address,
        age: data.address
    }
})

console.log(newArrObj);