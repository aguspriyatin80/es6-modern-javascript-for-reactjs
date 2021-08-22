console.clear()

function greetings(name) {
    return `Hello ${name}`
}

const mGreetings = name => `Hello ${name}`

const mGreetings2 = (name, age) => `Hello ${name}, you're ${age} years old`

console.log(greetings("Agus"));
console.log(mGreetings("Priyatin"));
console.log(mGreetings2("Priyatin", 20));