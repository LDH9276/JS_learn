let swiper = new Swiper('.top3', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});


// 이벤트 슬라이드
const slide = document.querySelector('.e-slide');
const slide_img = document.querySelectorAll('.slide-item');
const prev_btn = document.getElementById('slide-prev_btn');
const next_btn = document.getElementById('slide-next_btn');
const page_btn = document.querySelectorAll('.e-pagenation span');
const img_n = slide_img.length;
const img_w = 1000;
const m = 0; 
const s_con = 1;
let count = 0;

//슬라이드 이동 함수
function mslide(n){
  slide.style.left=(img_w+m)*-n+'px';
  count = n;
  for(let j=0; j<page_btn.length; j++){
    page_btn[j].classList.remove('on');
  }
  page_btn[n].classList.add('on');
}

//이전 버튼 클릭시
prev_btn.addEventListener('click', function(){ 
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);
  }
  clearInterval(Timer);
});

//다음 버튼 클릭시
next_btn.addEventListener('click', function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
  clearInterval(Timer);
});

//페이지 버튼 클릭시
for(let i=0; i<page_btn.length; i++){
  page_btn[i].addEventListener('click', function(){
    mslide(i);
    for(let j=0; j<page_btn.length; j++){
      page_btn[j].classList.remove('on');
    }
    page_btn[i].classList.add('on');
  });
}

//자동 슬라이드
let Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }}, 3000);

//마우스 오버시 슬라이드 멈춤
slide.addEventListener('mouseenter', function(){
  clearInterval(Timer);
});
slide.addEventListener('mouseleave', function(){
  Timer = setInterval(function(){
    if(count < img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }} , 3000);
  });

// 모달창
$(function(){
    let modal = `
      <div class="modal">
        <div class="m_inner">
          <img src="images/pc_prod_notice_20211210.jpg" alt="modal image">
          <p><input type="checkbox" id="ch"><label for="ch">일주일간 열지 않음</label>
          <a href="#" title="닫기">닫기</a></p>
        </div>
      </div>
    `

      $('body').append(modal);
      if($.cookie('popup') == 'none'){
        $('.modal').hide();
      } 
      let ch = $('.modal #ch');

    //쿠키파일이 현재 브라우저에 존재한다면 모달창이 안나오도록 한다.
    

    //#ch의 체크 여부로 쿠키 생성하거나 모달을 숨긴다.
    function closeModal(){
      if(ch.is(':checked')){
        $.cookie('popup', 'none', {expires:7, path:'/'});
      }
      $('.modal').hide();
    };

    //닫기 버튼을 클릭하여 closeModal 함수를 동작하게 한다.
    $('.modal a').click(function(){
      closeModal();
    });

    //랜덤번호 호출
    let ranNum = Math.floor(Math.random()*3)+1;
    let ranImg = document.querySelector('.ran_banner img');
    ranImg.src = `./img/banner0${ranNum}.png`;

    //랜덤 배너 (제이쿼리)
    // $(function(){
    //   let ranNum = Math.floor(Math.random()*3)+1;
    //   $('.ran_banner img').attr('src', `./img/banner0${ranNum}.png`);
    // })

  });