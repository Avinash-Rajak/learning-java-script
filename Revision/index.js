// alert('Hello World')
// console.error("This is an error");

let score;
score = 10;
console.log(score)

let namee = "Avi"
let age = 19

// string template

console.log(`My name is ${namee} and my age is ${age}`);

// strings
let s = "hello world"

console.log(s.length)
console.log(s.toLocaleUpperCase());

// arrays

const numbers = new Array(1,2,3,4,5)
console.log(numbers)

const fruits=["watermelon","jack", 10, true]

fruits.push("mangoes")
fruits.unshift("Strawberries")
console.log(fruits.indexOf("watermelon"));
console.log(fruits)

const person ={
    firstName: "Avi",
    lastName: "Rajak",
    age: 30,
    hobbies: ["Music", "books"],
    address:{
        street: "idk",
        city: "mum",
        state: "NA"
    }
}

console.log (person.lastName, person.firstName)
console.log(person.hobbies[1])
console.log(person.address.city)
