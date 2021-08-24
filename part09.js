let numArr = [1, 2, 3, 4]
let strArr = ["satu", "dua", "tiga"]
let cart = [
    {
        name: "Item 1",
        quantity: 2
    },
    {
        name: "Item 2",
        quantity: 4
    }
]
// contoh jika tidak menggunakan reduce
const angka = [1, 2, 3, 4, 10]
let jumlah = 0
for (let i = 0; i < angka.length; i++) {
    jumlah += angka[i]
}

console.log(jumlah)
// contoh jika menggunakan reduce
const numResult = numArr.reduce((acc, item) => {
    return acc + item;
}, 0)
console.log(numResult)
const strResult = strArr.reduce((acc, item) => {
    // return acc + " " + item
    return `${acc} ${item}`
}, "nol")
console.log(strResult);

const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity
}, 0)
console.log(totalQuantity);

