// document.getElementById("count-el").innerText = 5 

// let count = 0
// let myage = 18

// let firstbatch = 5
// let secondbatch = 7

// let count = firstbatch + secondbatch

// let myage = 18
// let humandogratio = 7

// let mydogage = myage * humandogratio

// let bonuspoint = 50

// bonuspoint = bonuspoint + 50
// bonuspoint = bonuspoint - 75
// bonuspoint = bonuspoint + 45

// let count = 5

// steps 
// initialize the count as 0
// listen for clicks on the increment buttons
// increment the count variables when the button is clicked
// change the counter-el in the html to reflect the new count

let countEl = document.getElementById("count-el");
let count = 0
function increment(){
    // console.log("Clicked")
    count = count + 1
    countEl.innerText = count
    console.log (count)
} 


 