let flag = 2

function controller(x){
    flag = flag + x
    slideShow(flag);
}

slideShow(flag);
function slideShow(num){
    let slides =  document.getElementsByClassName('slide');

    for (y of slides){
        y.style.display = "none"
    }
    slides[num].style.display = "block"

}
