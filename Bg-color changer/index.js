function changeBG(color){
    document.body.style.backgroundColor = color
    let txt = document.getElementsByClassName("text");
    // let txt = document.querySelector(".text .container");

    if(color =="#000000"){
       for (let elm of txt){
           elm.style.color = "#ffffff"
       }
    }
    else{
         for (let elm of txt) {
           elm.style.color = "#000000";
         }
    }
}