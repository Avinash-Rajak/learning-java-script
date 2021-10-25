
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