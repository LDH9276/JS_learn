$(function(){
  $('#toggle').click(function(){
    $(this).find('span').first().toggleClass('act01');
    $(this).find('span').eq(1).toggleClass('act02');
    $(this).find('span').last().toggleClass('act03');
    $('#wrap').toggleClass('wrap_pos');
})
  $('#search').click(function(){
    $('.search-box').toggleClass('serch-on');
  })


    //스크롤 값이 0보다 크면
    $(window).scroll(function(){
      let sPos = $(this).scrollTop();
      console.log(sPos);
      if(sPos > 0){
        $('#toggle, #search').addClass('on');
        $('#wrap').removeClass('wrap_pos');
        $('#toggle').find('span').first().removeClass('act01');
        $('#toggle').find('span').eq(1).removeClass('act02');
        $('#toggle').find('span').last().removeClass('act03');
        $('.search-box').removeClass('serch-on');
      }
      else{
        $('#toggle, #search').removeClass('on');
      }
    });

function slider(){
  $('.slide_wrap').animate({'marginLeft':'-100%'}, 1200, function(){
    $('.slide_wrap').css({'margin-left':'0'})
    $('.slide').first().appendTo('.slide_wrap');
  }
)}
let timer = setInterval(slider, 4000);
})