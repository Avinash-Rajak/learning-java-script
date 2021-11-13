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

// Ternary Operator

const x = 10

//  if color  x > 10 then "red" : "blue"
const color = x > 10   ?  "red"  : "blue" 

console.log(color)

switch (color){
    case "red":
        console.log("Color is red")
        break;
    case "blue":
        console.log("Color is blue")
        break;
    default:
        console.log("Color is NOT blue or red")
        break;
}


// function addNums(Num1= 2, Num2= 4) {
//     console.log(Num1 + Num2);
// }

// addNums()

// function addNums(Num1= 2, Num2= 4) {
//     return  Num1 + Num2;
// }

// console.log(addNums(5,5))

// Arrow Function !!!!!!
const addNums = (Num1, Num2) => Num1+Num2

console.log(addNums(5,4))

