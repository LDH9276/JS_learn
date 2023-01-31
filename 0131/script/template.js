$(function(){

  $(window).scroll(function(){
    console.log($(window).scrollTop());
  });

  let navNum = $('.gnb li');

  //index 값 구하기
  navNum.click(function(){
    let index = $(this).index();
    $('html, body').animate({scrollTop:$('section').eq(index).offset().top -60}, 1000);
    return false
  });

})