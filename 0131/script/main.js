$(document).ready(function() {

  let q = $('.faq dt');

  // 맨처음 클래스 부여
  q.first().addClass('on').next().show()

  // 클릭시마다 토글 이벤트 부여
  // q.click(function(){
  //   $(this).addClass('on')
  //   $(this).next().slideToggle();
  // });

  q.click(function(){
  $(this).siblings().removeClass('on').parent().find('dd').stop().slideUp();
  $(this).addClass('on').next().stop().slideDown();
});
});

