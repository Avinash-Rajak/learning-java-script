let firstCard = getRandomcard ()
let secondCard = getRandomcard();
let cards = [firstCard , secondCard ];
let sum = firstCard + secondCard 

let cashOut = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById ("sum-el")
 let cardsEl = document.getElementById ("cards-el")
console.log (sum)


function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: " ;
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum :" +  sum;
    
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

function newCard(){
    // console.log ("Drawing a new card from the deck")

    let card = 7
    sum = sum + card;
    renderGame()
    cards.push(card)
}

// let sent = ["Hello, ", "my ", "name ", "is ", "Per"]

// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sent.length; i++){
//     greetingEl.textContent += sent [i]
//  }

