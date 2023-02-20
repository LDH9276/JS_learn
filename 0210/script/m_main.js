


$(function(){

  let toggle = $('.h-top-toggle');
  let gnb = $('.h-top-gnb > ul > li')

  toggle.click(()=>{
    if($(this).find('span').hasClass('act')){
      $(this).find('span').removeClass('act');
      $('.h-top-gnb').fadeOut(200);
    }else{
      $(this).find('span').addClass('act');
      $('.h-top-gnb').fadeIn(200);
    }
  });

  gnb.click(function(){
      $(this).find('ul').slideToggle(200).parent().siblings().find('ul').slideUp(200);
      $(this).find('a').toggleClass('act').parent().siblings().find('a').removeClass('act');
  });


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


// 브랜드 탭메뉴
let tab_mnu = $('.brand-tab-con>li');

tab_mnu.first().find('div').css({'display':'block'})

tab_mnu.click(function(){
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).find('div').slideToggle(600).parent().siblings().find('div').slideUp(600);
  return false;
})

// 인기상품 탭메뉴
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

// 갤러리 아이템 마우스 오버 이벤트
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

// 이벤트 슬라이드
const eventWrap = document.querySelector('#event > article')
const eventSlider = document.querySelector('.event-slide-wrap');
const eventPrevBtn = document.querySelector('#event-prev');
const eventNextBtn = document.querySelector('#event-next');
let count = 0;
let sn = document.querySelectorAll('#event figure');
let sn01 = document.querySelector('#event figure');

/*
clientWidth는 컨텐츠만, 
offSetWidth는 컨텐츠 + 패딩, 
scrollWidth는 컨텐츠 + 패딩 + 스크롤바
*/
sliderWidth = sn01.clientWidth;
slideNumber = sn.length;

// 클릭시 위치이동
function eventSlide(n){
  eventSlider.style.left = -sliderWidth * n + 'px';
  count = n;
}

// 버튼 클릭시 함수실행
eventPrevBtn.addEventListener('click', ()=>{
  if(count < 1){
    count = 3;
  } else {
    eventSlide(count -1);
  }
});
eventNextBtn.addEventListener('click', ()=>{
  if(count < slideNumber -1){
    eventSlide(count +1);}
  else{
    eventSlide(count = 0);
  }
});


// 자동 함수실행
let eTimer = setInterval(function(){
  if(count < slideNumber -1){
    eventSlide(count +1);}
  else{
    eventSlide(count = 0);
  }
}, 4000)

// 마우스 오버시 clearInterval
eventWrap.addEventListener('mouseenter', ()=>{
  clearInterval(eTimer);
});
eventWrap.addEventListener('mouseleave', ()=>{
  eTimer = setInterval(function(){
    if(count < slideNumber -1){
      eventSlide(count +1);}
    else{
      eventSlide(count = 0);
    }
  }, 4000)
});

// $(window).scroll(function(){
//   let spos = $(this).scrollTop();
//   let newsOffset = $('#news').offset().top;
//   if (spos > newsOffset){
//     $('.footer-topbtn').fadeIn();
//   } else {
//     $('.footer-topbtn').fadeOut();
//   }
// });
// $('.footer-topbtn').click(()=>{
//   $('html, body').animate({scrollTop:'0px'}, 600);
//   return false;
// })

// #news를 지날때 top버튼의 display를 block으로 변경
const topBtn = document.querySelector('.footer-topbtn');
const news = document.querySelector('#news');
const newsPos = news.offsetTop;

window.addEventListener('scroll', ()=>{
  let scrollPos = window.scrollY;
  if(scrollPos > newsPos){
    topBtn.style.display="block";
  } else {
    topBtn.style.display="none";
  }
});

