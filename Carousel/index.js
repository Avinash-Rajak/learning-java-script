const carouselSlide = document.getElementById(".carousel-slide");
const carouselImg = document.querySelector(".carousel-slide img");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let counter = 1
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translatex(' + (-size * counter)+'px)';

