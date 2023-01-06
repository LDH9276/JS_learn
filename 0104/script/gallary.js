const img_list = document.querySelectorAll('.lnb > li > img');
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

    img_list[imgNumber-1].style.border = "4px solid orangered";
    img_list[imgNumber-1].style.boxSizing = "border-box";
  }
  }
);

    //증가하는 함수
  let prev = document.getElementById('prev');
  let next = document.getElementById('next')


  prev.addEventListener('click', function(){
    if(imgNumber == 1){
      imgNumber=9;
    }else{
      imgNumber--
    }
    document.getElementById('page').innerHTML=`${imgNumber} / 9`
    document.getElementById('photo').src='./img/movie_image0'+imgNumber+'.jpeg';
    img_list.forEach((el) => {
      el.style.border = "none";
    });
    img_list[imgNumber-1].style.border = "4px solid orangered";
    img_list[imgNumber-1].style.boxSizing = "border-box";
  });
  
  next.addEventListener('click', function(){
    if(imgNumber == 9){
      imgNumber=1;
    }else{
      imgNumber++
    }
    document.getElementById('page').innerHTML=`${imgNumber} / 9`
    document.getElementById('photo').src='./img/movie_image0'+imgNumber+'.jpeg';
    img_list.forEach((el) => {
      el.style.border = "none";
    });
    img_list[imgNumber-1].style.border = "4px solid orangered";
    img_list[imgNumber-1].style.boxSizing = "border-box";
  });
  