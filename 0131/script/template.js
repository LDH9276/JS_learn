$(function(){

  let navNum = $('.gnb li');
  let nav = $('.gnb > ul > li > a');
  let scrolls = $(window).scrollTop(); // scrolls 변수 선언

  // $(window).scroll(function(){
  //   let scrolls = ($(this).scrollTop())

  //   if (scrolls >= 340 && scrolls <= 1139){
  //     nav.eq(1).addClass('on').parent().siblings().find('a').removeClass('on');      
  //   }
  //   else if (scrolls >= 1140 && scrolls <= 1939){
  //     nav.eq(2).addClass('on').parent().siblings().find('a').removeClass('on') ;   
  //   }
  //   else if (scrolls >= 1940 && scrolls <= 2739){
  //     nav.eq(3).addClass('on').parent().siblings().find('a').removeClass('on'); 
  //   }
  //   else if (scrolls >= 2740 && scrolls <= 3539){
  //     nav.eq(4).addClass('on').parent().siblings().find('a').removeClass('on'); 
  //   }
  //   else if (scrolls >= 3540 && scrolls <= 4339){
  //     nav.eq(5).addClass('on').parent().siblings().find('a').removeClass('on'); 
  //   }
  //   else if (scrolls >= 4340){
  //     nav.eq(6).addClass('on').parent().siblings().find('a').removeClass('on'); 
  //   }
  //   else{
  //     nav.eq(0).addClass('on').parent().siblings().find('a').removeClass('on'); 
  //   }
  // });

  $(window).scroll(()=>{

    // section태그의 각각의 함수 적용 (for문)
    $('section').each(()=>{ 

      // section태그의 index값을 s_Idx에 저장
      let s_Idx = $(this).index(); 
      
      // 스크롤값이 section태그의 top값보다 크거나 같을때
      if(scrolls >= $('section').eq(s_Idx).offset().top -60){ 

        //각자의 클래스 적용
        nav.eq(s_Idx).addClass('on').parent().siblings().find('a').removeClass('on'); 
      }
    });
  });

  /*
  $('main section').each(function(i){
    let top = $(this).offset().top;
    if(scrolls >= top){
      $('.gnb li a').eq(i).addClass(on).parent().siblings().find('a').removeClass('on')
    }
  })
  */




  //index 값 구하기
  navNum.click(function(){
    let index = $(this).index();
    $('html, body').animate({scrollTop:$('section').eq(index).offset().top -60}, 1000);
    return false
  });

})