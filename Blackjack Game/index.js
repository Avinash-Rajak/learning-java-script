let firstCard = 10
let secondCard = 1

let sum = firstCard + secondCard 

let cashOut = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById ("sum-el")
 let cardsEl = document.getElementById ("cards-el")
console.log (sum)

function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + "" + secondCard;
    sumEl.textContent = "Sum :" +  sum;
    sum = sum+1
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

    messageEl.textContent = message

// console.log (cashOut)

}

