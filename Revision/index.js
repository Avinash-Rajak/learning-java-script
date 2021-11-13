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

person.email = "avi@gmail.com"
console.log (person.lastName, person.firstName)
console.log(person.hobbies[1])
console.log(person.address.city)

console.log(person)

const todos = [
    {
        id: 1,
        text: "Clean up the trash",
        iscompleted : true
    },
    {
        id: 2,
        text: "Meeting",
        iscompleted : true
    },
    {
        id: 3,
        text: "Appt idk",
        iscompleted : false
    },
]

// console.log(todos[1].text)

const todojson = JSON.stringify(todos);
console.log(todojson)

// foreach, map, filter
todos.forEach(function(todo){
    console.log(todo.text)
})

const todoCompleted = todos.filter(function(todo) {
    return todo.iscompleted === true;
}).map(function (todo) {
    return todo.text
})

console.log(todoCompleted)