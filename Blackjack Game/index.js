let firstCard = getRandomCard ();
let secondCard = getRandomCard();
// let firstCard = 5;
// let secondCard = 10;
let cards = [firstCard , secondCard ];
let sum = firstCard + secondCard 

let cashOut = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById ("sum-el")
let cardsEl = document.getElementById ("cards-el")

 function getRandomCard(){
    // return Math.floor(Math.random() * 13) + 1;
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1 ){
        return 11
    }
    else if(randomNumber === 11){
        return 10
    }
    else if(randomNumber === 12){
        return 10
    }
    else if(randomNumber === 13){
        return 10
    }

    else{
      return randomNumber;   
    }
 }
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

    let card = getRandomCard();
    // let card = 4;
    sum = sum + card;
    cards.push(card);
    console.log (cards)
    renderGame()
   
}

// let sent = ["Hello, ", "my ", "name ", "is ", "Per"]

// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sent.length; i++){
//     greetingEl.textContent += sent [i]
//  }

// let randomNumber = Math.random() * 6
// console.log (randomNumber)

// let flooredNumber = Math.floor(7.4567)
// console.log(flooredNumber);

// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log (randomNumber)

// function rollDice(){
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber; 
    
// }

// console.log (rollDice())


