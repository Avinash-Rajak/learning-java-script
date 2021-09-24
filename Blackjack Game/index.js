let firstCard = 10
let secondCard = 20

let sum = firstCard + secondCard 

let cashOut = false
let isAlive = true

let message = ""
console.log (sum)

function startGame(){
    if (sum < 21)
    {
        message = "Do you want to draw a new card ? 😊";
    }
     else if(sum === 21)
     {
        message = "Woohhoo! You have a BlackJack!!!! 🎉";
        cashOut = true
    } 
    else if(sum > 21)
    {
        message = "You are out of the game 😢";
        isAlive = false
    }

console.log (cashOut)
console.log (message)
}

