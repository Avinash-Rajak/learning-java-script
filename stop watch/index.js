let hr = 0
let min = 0
let sec = 0
let count = 0

let timer = false

let hrString = hr
let minString = min
let secString = sec


function start(){
    timer = true
    stopWatch()
}

function stop(){
    timer = false
}

function reset(){
    timer = false;
     hr = 0;
     min = 0;
     sec = 0;
     count = 0;

    

     document.getElementById("hr").innerHTML = "00" ;
     document.getElementById("min").innerHTML = "00" ;
     document.getElementById("sec").innerHTML =  "00";
     document.getElementById("count").innerHTML= "00" ;
}

function stopWatch(){
    if(timer == true){
        count = count + 1

        if(count == 100){
            sec = sec + 1;
            count = 0
        }

        if (sec == 60) {
          min = min + 1;
          sec = 0;
        }

        if (min == 60){
            hr = hr + 1
            min = 0
            sec = 0
        }

        if (hrString < 10){
            document.getElementById("hr").innerHTML = "0" + hr;
        }
        if (minString < 10){
            document.getElementById("min").innerHTML = "0" + min;
        }
        if (secString < 10){
            document.getElementById("sec").innerHTML = "0" + sec;
        }
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML =  sec;
        document.getElementById("count").innerHTML = count

        setTimeout("stopWatch()",10);
    }
}