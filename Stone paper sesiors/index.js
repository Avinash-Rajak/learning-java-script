let hands = ["Stone", "Paper", "Sessiors"]

function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex];
}

console.log  (getHand())