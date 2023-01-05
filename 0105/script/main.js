const img_list = document.querySelectorAll('.lnb > li');
let imgNumber = 1;

img_list.forEach((el, index)=>{
  el.onclick=()=>{
    console.log(index+1);
    imgNumber = index+1;
    document.getElementById('page').innerHTML=`${imgNumber} / 16`
    document.getElementById('photo').src='./images/movie_image'+imgNumber+'.jpg';
  }
});

let prev = document.querySelector('.left-angle');
let next = document.querySelector('.right-angle');

prev.addEventListener('click', function(){
  if(imgNumber == 1){
    imgNumber=16;
  }else{
    imgNumber--
  }
  document.getElementById('page').innerHTML=`${imgNumber} / 16`
  document.getElementById('photo').src='./images/movie_image'+imgNumber+'.jpg';
});

next.addEventListener('click', function(){
  if(imgNumber == 16){
    imgNumber=1;
  }else{
    imgNumber++
  }
  document.getElementById('page').innerHTML=`${imgNumber} / 16`
  document.getElementById('photo').src='./images/movie_image'+imgNumber+'.jpg';
});