console.clear()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        return `My name is ${this.name}.`
    }
    getDetail() {
        return `I am ${this.age} years old.`
    }
}

class Pilot extends Person {
    constructor(name, age, job) {
        super(name, age, job)
        this.name = "Eka"
        this.job = job
    }
    getDetail() {
        return "getDetail Pilot";
    }
    static getData() {
        console.log('getData Pilot')
    }
    getJob() {
        return `I am a ${this.job}`
    }
    getName() {
        return `My name is ${this.name}.`
    }
    getData() {
        return this.getName() + super.getDetail() + this.getJob()
    }

}
const p = new Pilot("Agus", 40, "Programmer");
const person = new Person("Agus", 41)
console.log(typeof Person)
// console.log(p.getData())
// console.log(p.getDetail())
// Pilot.getData()