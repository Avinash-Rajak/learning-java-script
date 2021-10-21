let flag = 0

slideShow(0);
function slideShow(num){
    let slides =  document.getElementsByClassName('slide');
    slides[num].style.display = "block"

}
