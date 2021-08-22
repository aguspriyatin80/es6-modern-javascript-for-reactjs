console.clear()

// const mSum = (num1, num2) => console.log(num1 + num2);
// const mSum = (...args) => {
//     let sum = 0
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i]
//     }
//     console.log(sum)

// }
// jika parameter banyak
const mSum = (num1, num2, ...args) => { // posisi REST PARAMETER (...args) harus diletakkan di parameter terakhir
    console.log(num1)
    console.log(num2)
    console.log(args)
    let sum = num1 + num2
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum)

}
mSum(1, 2, 3, 4, 5)