console.clear()

function Person(name, birthYear) {
    this.name = name
    this.yearOfBirth = birthYear
    this.getDetails = function () {
        return `My name is ${this.name}, I'm ${2021 - this.yearOfBirth} years old`
    }
}

const p = new Person("Agus", 1980)
console.log(p.getDetails())