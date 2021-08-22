console.clear()

const nickname = "agus"
const myNickName = nickname;
const myNickname = `${nickname}`

const firstName = "Agus"
const lastName = "Priyatin"
function getFullName(firstName, lastName) {
    // return firstName + ' ' + lastName // not using Template String, concatenate using symbol +
    return `${firstName} ${lastName}`
}
const mGreetings = `Hello ${getFullName(firstName, lastName) + 100}`

let red = 200
let green = 155
let blue = 100
let alpha = 0.8
// const rgbaExp = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')' // if not applying Template string
const rgbaExp = `rgba(${red},${green},${blue},${alpha})`
console.log(myNickname);
console.log(getFullName(firstName, lastName));
console.log(mGreetings);
console.log(rgbaExp);
