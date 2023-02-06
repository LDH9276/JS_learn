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

function mslide(n){
  slide.style.left=(img_w+m)*-n+'px';
  count = n;
  for(let j=0; j<page_btn.length; j++){
    page_btn[j].classList.remove('on');
  }
  page_btn[n].classList.add('on');
}

slideEvent(0);

prev_btn.addEventListener('click', function(){ 
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);
  }
  clearInterval(Timer);
});

next_btn.addEventListener('click', function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
  clearInterval(Timer);
});

for(let i=0; i<page_btn.length; i++){
  page_btn[i].addEventListener('click', function(){
    mslide(i);
    for(let j=0; j<page_btn.length; j++){
      page_btn[j].classList.remove('on');
    }
    page_btn[i].classList.add('on');
  });
}
  let Timer = setInterval(function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }}, 3000);

  slide.addEventListener('mouseenter', function(){
    clearInterval(Timer);});

  slide.addEventListener('mouseleave', function(){
    Timer = setInterval(function(){
      if(count < img_n-s_con){
        mslide(count+1);
      }else{
        mslide(0);
      }} , 3000);
    });
  