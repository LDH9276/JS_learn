//1. 변수
const slide = document.querySelector('.e-slide');
const slide_img = document.querySelectorAll('.slide-item');
const prev_btn = document.getElementById('slide-prev_btn');
const next_btn = document.getElementById('slide-next_btn');
const page_btn = document.querySelectorAll('.e-pagenation span');
const img_n = slide_img.length;

const img_w = 900;
const m = 0; 
const s_con = 1;
let count = 0;

function slideMoveLast(){
  slide.appendChild(slide.firstElementChild);
  slide.style.marginLeft='0%';
}
function nextSlide(){
  slide.style.marginLeft='-100%';
  slideMoveLast();
  }

  
function slideMoveFirst(){
  slide.insertBefore(slide.lastElementChild, slide.firstElementChild);
  slide.style.marginLeft='-100%';
}
function prevSlide(){
  slide.style.marginLeft='0%';
  slideMoveFirst();
  }

setInterval(nextSlide, 1000);

// prev_btn.addEventListener('click', function(){
//   prevSlide();
// }
// );
// next_btn.addEventListener('click', function(){
//   nextSlide();
// }
// );