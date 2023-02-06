$(document).ready(function(){
  function slideLeft() {
    $('.item_slide_wrap').animate({marginLeft: '-100%'}, 500, 'easeOutQuint' , function(){
      $('.item').eq(0).appendTo('.item_slide_wrap');
      $('.item_slide_wrap').css({marginLeft: '0'});
    });
  }

  let Timer = setInterval(slideLeft, 3000);
});