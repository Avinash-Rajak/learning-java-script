const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelector(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translatex(' + (-size * counter)+'px)';

//buttonListner

// nextBtn.addEventListener('click', () => {
//   carouselSlide.style.transition = "transfrom 0.4s ease-in-out";
//   counter = counter + 1;
//   console.log(counter);
// });

function next() {
    carouselSlide.style.transition = "transfrom 0.4s ease-in-out";
    counter++
    console.log(counter);
    carouselSlide.style.transform = 'translatex('+(-size*counter)+'px)'
}

