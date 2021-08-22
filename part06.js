let myArr1 = [1, 2, 3]
// let myArr2 = [...myArr1] // mengcopy dari myArr1
let myArr2 = [4, 5]
// let myArr3 = [...myArr1, ...myArr2] // digunakan untuk menggabungkan array seperti method concat berikut:
// let myArr3 = myArr1.concat(myArr2)
let myArr3 = [0, ...myArr1, ...myArr2, 6] // bisa digabungkan dengan element baru
myArr1.push(4)
console.log(myArr1)
console.log(myArr2); // myArr2 tidak mereference array myArr1, artinya jika myArr1 diubah, maka myArr2 tidak ikut berubah
console.log(myArr3)
