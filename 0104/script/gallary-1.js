let smallImg = document.querySelectorAll('.thumb');
let bigImg = document.querySelector('#photo');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let n = 1;

prev.addEventListener('click', minus);
next.addEventListener('click', plus);

for (let i=0; i<smallImg.length; i++){
  smallImg[i].addEventListener('click', changeImg);

}

function changeImg(){
  let imgUrl = this.querySelector('img').src;
  bigImg.setAttribute('src', imgUrl)

  let slideElements = document.querySelectorAll('.swiper-slide');
  for (let j=0; j<slideElements.length; j++){
    slideElements[j].querySelector('img').style.border="none";
  }
  this.querySelector('img').style.border="4px solid orangered"
}

function plus(){
  swiper.slideNext();
  let currentSlide = swiper.activeIndex;
  n = currentSlide + 1;

  if(currentSlide == 10){
    currentSlide = 0;
  }

  document.getElementById('photo').src="./img/movie_image0"+n+".jpeg"
  changeImg.call(swiper.slides[currentSlide]);
};

function minus(){
  swiper.slidePrev();
  let currentSlide = swiper.activeIndex;
  n = currentSlide + 1;

  if(currentSlide == 0){
    currentSlide = 9;
  }

  document.getElementById('photo').src="./img/movie_image0"+n+".jpeg"
  changeImg.call(swiper.slides[currentSlide]);
}
