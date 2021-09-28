// let firstCard = getRandomCard ();
// let secondCard = getRandomCard();
// let firstCard = 5;
// let secondCard = 10;
// let cards = [firstCard , secondCard ];
let cards = [];
let sum = 0
let hasblackjack = false;
let cashOut = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById ("sum-el")
let cardsEl = document.getElementById ("cards-el")

let player = {
    name : "User",
    chips : 256
}


let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips

// let playerName = "User"
// let playerChips = 256

// let playerEl = document.getElementById("player-el");

// playerEl.textContent = playerName + ": $" + playerChips

console.log (cards)

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


function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard; 
  renderGame();
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
        // cashOut = true
        hasblackjack = true
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
    if (isAlive === true && hasblackjack === false) {
      let card = getRandomCard();
      sum = sum + card;
      cards.push(card);
      // console.log (cards)
      renderGame();
    }
   
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



let list = {
    bollean: true,
    string: "hii avi",
    number: 2,
    string: ["hii", "hello"]
}