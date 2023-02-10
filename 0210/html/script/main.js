
//1. 변수 선언
//메인메뉴 클릭시 서브메뉴가 나오게
let gnb = document.querySelectorAll('.h-top-gnb > ul > li');

for(let i=0; i<gnb.length; i++){
    gnb[i].addEventListener('click', function(){
      for(let j=0; j<gnb.length; j++){
        let subMenues = gnb[j].querySelector('ul');
        subMenues.style.display = 'none';
      }
      gnb[i].querySelector('ul').style.display = 'block';
    });
}

//gnb 영역 밖 클릭시 서브메뉴가 사라지게
let sub = document.querySelectorAll('.sub');
let mainArea = document.querySelector('main')

mainArea.addEventListener("click", function(){
    for(let k=0; k<sub.length; k++){
    sub[k].style.display = 'none';
  }
})


$(function(){

  //인트로 슬라이드 prev, next 버튼 클릭시 슬라이드
  const prev_btn = $('#intro-prev');
  const next_btn = $('#intro-next');
  let page_btn = $('.intro-page > span');
  const introProgressBar = $('.intro-progress span.on');
  let n = 0;


  /* 
  - 추후 수가 사항 -
  버튼이나, 페이지 번호 mouseleave시 setInterval이 되지만,
  사용자가 임의로 버튼을 끈 경우 모든 시간이벤트를 X,
  
  이런 상황이 아니라면, 해당 이벤트를 진행시에 시간이벤트를 포함시킨다.

  time 관련 함수나 변수를 설정해서 나중에 만들기
  */

  let autoplayToggled = $('.intro-progress i.fa-pause');

  function autopayCheck(){
    if (autoplayToggled === true){
      if($()){}
    }
  }

  //인트로 슬라이드 슬라이드 함수
  function imgFadeSlide(){
    $('.intro-slide-slide').stop().slice(0).fadeOut(500);
    if (n == 2){
      n = 0;
    } else {
      n++;
    }
    $('.intro-slide-slide').eq(n).fadeIn(500);
    let slidePersent = 33.33333333333333 * (n + 1);
    introProgressBar.css('width', slidePersent + '%');
    page_btn.eq(n).addClass('on').siblings().removeClass('on');
  } 

  let timer = setInterval(imgFadeSlide, 3000);

  function clearAuto(){
    clearInterval(timer);
    $('.intro-progress i.fas').removeClass('fa-puse').addClass('fa-play');
  }

  prev_btn.click(function(){
    clearAuto();
    $('.intro-slide-slide').stop().slice(0).fadeOut(500);
    if (n == 0){
      n = 2;
    } else {
      n--;
    }
    $('.intro-slide-slide').eq(n).fadeIn(500);
    let slidePersent = 33.33333333333333 * (n + 1);
    introProgressBar.css('width', slidePersent + '%');
    page_btn.eq(n).addClass('on').siblings().removeClass('on');
  });      

  next_btn.click(function(){
    clearAuto();
    imgFadeSlide();
  });      

  $('.intro-progress i.fas').click(function(){
    if($(this).hasClass('fa-pause')){
      $(this).removeClass('fa-pause').addClass('fa-play');
      clearInterval(timer);
    } else {
      $(this).removeClass('fa-play').addClass('fa-pause');
      timer = setInterval(imgFadeSlide, 3000);
    }
  }
  );

  page_btn.click(function(){
    clearAuto();
    let idx = $(this).index();
    $('.intro-slide-slide').stop().slice(0).fadeOut(500);
    $('.intro-slide-slide').eq(idx).fadeIn(500);
    $(this).addClass('on').siblings().removeClass('on');
  });
})

let tabfirst = document.querySelector('.brand-tab-item > li');
let tab_item = document.querySelectorAll('.brand-tab-item > li');
tabfirst.style.display ="block";

let tab_list = document.querySelectorAll('.brand-tab-con > li');

for(let i=0; i<tab_item.length; i++){
  tab_list[i].querySelector('a').addEventListener('click', (e)=>{
    e.preventDefault();
    for(let j=0; j<tab_item.length; j++){
      tab_item[j].style.display = 'none';
      tab_item[i].style.display = 'block';
      tab_list[j].classList.remove('on');
      tab_list[i].classList.add('on');
    }
  });
}

let gall_btn = document.querySelectorAll('.best-btn');
let gall_item = document.querySelectorAll('.best-gallary-wrap');

for(let i=0; i<gall_btn.length; i++){
  gall_btn[i].addEventListener('click', (e)=>{
    e.preventDefault();
    for(let j=0; j<gall_item.length; j++){
      gall_item[j].classList.remove('on');
      gall_item[i].classList.add('on');
      gall_btn[j].classList.remove('on');
      gall_btn[i].classList.add('on');
    }
  });
}

// 마우스 오버하면 이미지 -1를 -2 파일명 변경

let gallaryItems = document.querySelectorAll('.best-gallary-wrap img');
for(let i=0; i<gallaryItems.length; i++){
  gallaryItems[i].addEventListener('mouseover',()=>{
    let imgUrl = gallaryItems[i].getAttribute('src');
    let changeUrl = imgUrl.replace('-1', '-2');
    gallaryItems[i].setAttribute('src', changeUrl);
  });
  gallaryItems[i].addEventListener('mouseout', ()=>{
    imgUrl = gallaryItems[i].getAttribute('src');
    changeUrl = imgUrl.replace('-2', '-1');
    gallaryItems[i].setAttribute('src', changeUrl);
    //setAttrubute, replace 등 변경은 ('대상', '변경값')
  });
}