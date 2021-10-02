let myLeads = ["www.google.com", "www.googl.com", "www.gogl.com", "www.gogl.co"];
let inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let myLeads = i; i = myLeads.length; i++ ){
    console.log(myLeads);
}

