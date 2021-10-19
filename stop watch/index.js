let hr = 0
let min = 0
let sec = 0
let count = 0

let timer = false



function start(){
    timer = true
    stopWatch()
}

function stop(){
    timer = false
}

function reset(){
    timer = false;
}

function stopWatch(){
    if(timer == true){


        setTimeout("stopWatch()",10);
    }
}