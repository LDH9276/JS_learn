$(document).ready(function() {
  window.addEventListener("load", function() {
    // Attach the mouse wheel event to the document
    document.addEventListener("mousewheel");
  });

  $('.gnb ul li a').click(function(){
    $('.gnb ul li a').removeClass('on');
    $(this).addClass('on');
    let idName = $(this).attr('href');
    let secOffset = $(idName).offset().left
    $('html, body').stop().animate({scrollLeft:secOffset}, 1600, 'easeInOutExpo');
    return false;
  })

  $(window).scroll(function(){
  $('main section').each(function(){
    let scrolls = $(window).scrollLeft();
    let s_Idx = $(this).index();
    let nav = $('.gnb ul li a');
    if(scrolls >= $('section').eq(s_Idx).offset().left){ 
      nav.eq(s_Idx).addClass('on').parent().siblings().find('a').removeClass('on'); 
    }

     // 개별적으로 Wheel 이벤트 적용
    $(this).on('mousewheel',function(e){
      
      var delta = 0;
      var moveLeft = null;
      var boxMax = $("main section").length - 1;
      var winEvent = "";
      
      if(!winEvent) { //만약에 이벤트가 발생하지 않는다면
        winEvent = window.event; //이벤트는 없다
      }
      if(winEvent.wheelDelta) { //만약에 이벤트에서 휠데이터값이 있다면
        delta = winEvent.wheelDelta / 120; //데이터값을 저장
        if(window.opera) {//만약에 오페라 브라우저라면
            delta = -delta;//데이터값을 반대로 저장
        }
      }          
      else if(winEvent.detail) { //만약에 이벤트에서 휠데이터값이 없다면
         delta = -winEvent.detail / 3; //데이터값을 반대로 저장
      }
            
      // 마우스휠을 위에서 아래로 이동(처음에서 다음박스로 이동)
      if(delta < 0) {
          // 마지막 BOX 보다 순서값이 작은 경우에 실행
          if($(this).index() < boxMax) {
              if($(this).next() != undefined) {
                  moveLeft =$(this).next().offset().left;
              }
          }
          // 마지막 section보다 더 오른쪽으로 이동하려고 하는 경우 알림창 출력
          else {
              return false;
          }
      }
      // 마우스휠을 아래에서 위로 이동( 뒤에서 앞으로 이동)
      else {
          // 첫번째 section보다 순서값이 큰 경우에 실행
          if($(this).index() > 0) {
              if($(this).prev() != undefined) {
                  moveLeft =$(this).prev().offset().left;
              }
          }
          // 첫번째 section보다 더 위로 이동하려고 하는 경우 알림창 출력
          else {
              return false;
          }
      }
           //화면 이동 0.3초(300)
          $("html,body").stop().animate({scrollLeft : moveLeft + "px"}, 300);
      });
    });
  });
});
