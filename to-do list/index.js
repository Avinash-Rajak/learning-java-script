// var enterButton = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.querySelector("ul");
// var item = document.getElementsByTagName("li");

// function inputLength() {
//   return input.value.length;
// }

// function listLength() {
//   return item.length;
// }

// function createListElement() {
//   var li = document.createElement("li"); // creates an element "li"
//   li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
//   ul.appendChild(li); //adds li to ul
//   input.value = ""; //Reset text input field

//   //START STRIKETHROUGH
//   // because it's in the function, it only adds it for new items
//   function crossOut() {
//     li.classList.toggle("done");
//   }

//   li.addEventListener("click", crossOut);
//   //END STRIKETHROUGH

//   // START ADD DELETE BUTTON
//   var dBtn = document.createElement("button");
//   dBtn.appendChild(document.createTextNode("X"));
//   li.appendChild(dBtn);
//   dBtn.addEventListener("click", deleteListItem);
//   // END ADD DELETE BUTTON

//   //ADD CLASS DELETE (DISPLAY: NONE)
//   function deleteListItem() {
//     li.classList.add("delete");
//   }
//   //END ADD CLASS DELETE
// }

// function addListAfterClick() {
//   if (inputLength() > 0) {
//     //makes sure that an empty input field doesn't create a li
//     createListElement();
//   }
// }

// function addListAfterKeypress(event) {
//   if (inputLength() > 0 && event.which === 13) {
//     //this now looks to see if you hit "enter"/"return"
//     //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
//     createListElement();
//   }
// }


// enterButton.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);











let myLeads = [];
/*myLeads = jsons.stringfy(myLeads)//for converting string into array we can use json.parse()*/
const inputEl = document.getElementById("userInput");
const inputBtn = document.getElementById("enter");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const remove = document.getElementById("bin")
// const tabBtn = document.getElementById("tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// tabBtn.addEventListener("click", function () {});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});


// remove.addEventListener("click", function(elementNum){
//     myLeads.()
// })
function renderLeads() {
    console.log(inputEl.value)
  let listElements = "";
  for (let i = 0; i < myLeads.length; i++) {
    listElements += `
        <li>
            ${myLeads[i]}
        </li>`;

  }
  ulEl.innerHTML = listElements;
}