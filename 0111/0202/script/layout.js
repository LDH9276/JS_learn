$(document).ready(function(){
  function header(){
  let sPos = $(window).scrollTop();
  if (sPos > 300){
    $('header').addClass('act');
    $('.gnb li a, i').addClass('act');
    $('header > h1 img').attr('src', $('header > h1 img').attr('src').replace('_white','_black'));
  } else {
    $('header, .gnb a, i.fas').removeClass('act');
    $('header > h1 img').attr('src', $('header > h1 img').attr('src').replace('_black','_white'));

  }
  }
  header();

  $(window).scroll(function(){
    sPos = $(this).scrollTop();
    
    header();

    let section = document.querySelectorAll('section');
    for(let i=0; i<section.length; i++){
      if (section[i+2] && sPos >= $(section[i+2]).offset().top -120){
        $('#m_nav li').eq(i).addClass('on').siblings().removeClass('on');
      }
    }
  });

  $('#next_btn').click(function(){
    $('html, body').animate({scrollTop:$('#top3').offset().top - 120}, 200, 'easeOutQuint');
    return false;
  });

  $('#m_nav li, .gnb li').click(function(){
    let ind = $(this).index();
    $('html, body').animate({scrollTop:$('section').eq(ind + 2).offset().top}, 200, 'easeOutQuint');
    return false;
  });

});