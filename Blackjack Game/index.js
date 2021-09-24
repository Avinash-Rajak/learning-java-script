let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard

console.log (sum)

if (sum < 21){
    console.log ("Dou you want to draw a new card ? 😊")
} else if(sum === 21){
    console.log ("Woohhoo! You have a BlackJack!!!! 🎉")
} else if(sum > 21){
    console.log("You are out of the game 😢")
}