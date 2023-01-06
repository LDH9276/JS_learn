const img_list = document.querySelectorAll('.lnb > li > img');
const slidewrap = document.querySelector('.lnb');

const bigImg = document.getElementById('photo');
let imgNumber = 1;

img_list.forEach((el, index)=>{
  el.onclick=()=>{
    console.log(index+1);
    imgNumber = index+1;
    document.getElementById('page').innerHTML=`${imgNumber} / 9`
    document.getElementById('photo').src='./img/movie_image0'+imgNumber+'.jpeg';
    img_list.forEach((el) => {
      el.style.border = "none";
    });
    border();
  }
  }
);


    //증가하는 함수
  let prev = document.getElementById('prev');
  let topPrev = document.getElementById('top_prev');
  let next = document.getElementById('next')
  let topNext = document.getElementById('top_next')

  prev.addEventListener('click', prevEvent);
  topPrev.addEventListener('click', prevEvent);
  // topPrev.addEventListener('keypress', 
  
  
  function prevEvent(){
    if(imgNumber == 1){
      imgNumber=9;
    }else{
      imgNumber--
    }
    document.getElementById('page').innerHTML=`${imgNumber} / 9`
    document.getElementById('photo').src='./img/movie_image0'+imgNumber+'.jpeg';
    border();
    }


  next.addEventListener('click', nextEvent)
  topNext.addEventListener('click', nextEvent)
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) {
      prevEvent();
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 39) {
      nextEvent();
    }
  });
  
    function nextEvent(){
    if(imgNumber == 9){
      imgNumber=1;
    }else{
      imgNumber++
    }
    document.getElementById('page').innerHTML=`${imgNumber} / 9`
    document.getElementById('photo').src='./img/movie_image0'+imgNumber+'.jpeg';
    border();
  };

  function border(){
    if(imgNumber > 8){
      slidewrap.style.transform = "translate(-100px, 0px)";
    }else{
      slidewrap.style.transform = "translate(0px, 0px)"
    }
    img_list.forEach((el) => {
      el.style.border = "none";
    });
    img_list[imgNumber-1].style.border = "4px solid orangered";
    img_list[imgNumber-1].style.boxSizing = "border-box";
  }
  
  