let firstCard = 10
let secondCard = 18

let sum = firstCard + secondCard + 4

let cashOut = false
let isAlive = true
console.log (sum)

if (sum < 21){
    console.log ("Dou you want to draw a new card ? 😊")
} else if(sum === 21){
    console.log ("Woohhoo! You have a BlackJack!!!! 🎉")
    cashOut = true
} else if(sum > 21){
    console.log("You are out of the game 😢")
    isAlive = false
}

console.log (cashOut)