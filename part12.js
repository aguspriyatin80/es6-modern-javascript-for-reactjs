console.clear()

function Person(name, birthYear) { // function base
    this.name = name
    this.yearOfBirth = birthYear
    this.getDetails = function () {
        return `My name is ${this.name}, I'm ${2021 - this.yearOfBirth} years old`
    }
    // return this
}

class Person2 { // class base
    constructor(name, birthYear) {
        this.name = name
        this.birthYear = birthYear
    }
    getDetails = () => {
        return `Name: ${this.name} and Age: ${2021 - this.birthYear}`
    }
}
const p = new Person("Agus", 1980)
console.log(p.getDetails());
const p2 = new Person2("Agus", 1980)
console.log(p2.getDetails());

// console.log(p.getDetails())