let bigImg = document.querySelector('#photo');
console.log(bigImg);
let smallImg = document.querySelectorAll('.s_img');

for(let i = 0; i<smallImg.length; i++){
  smallImg[i].addEventListener('click', imgChange);
}

function imgChange(){
  let picUrl = this.src;
  console.log(picUrl);
  // bigImg.setAttribute('src', picUrl);

  let bigUrl = './images/img_main_banner_160110.jpg';
  picUrl = picUrl.replace(bigUrl, picUrl);
  document.getElementById('photo').src=picUrl;
}
