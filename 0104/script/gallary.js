let smallImg = document.querySelectorAll('.thumb');
let bigImg = document.querySelector('#photo');

for (let i=0; i<smallImg.length; i++){
  smallImg[i].addEventListener('click', changeImg);

}

function changeImg(){
  let imgUrl = this.src;
  bigImg.setAttribute('src', imgUrl)

  for (let j=0; j<smallImg.length; j++){
    smallImg[j].style.border="none";
  }
  this.style.border="4px solid orangered"

}

    //증가하는 함수
  let prev = document.getElementById('prev');
  let next = document.getElementById('next')
  let n=1;

  prev.addEventListener('click', minus);
  next.addEventListener('click', plus);

  function plus(){
    if(n==9){
        n = 1;
      }else{
        n++;
      }
      document.getElementById('photo').src="./img/movie_image0"+n+".jpeg"
    };

    //감소하는 함수
    function minus(){
      if(n==1){
        n = 9;
      }else{
        n--;
      }
      document.getElementById('photo').src="./img/movie_image0"+n+".jpeg"
    }
