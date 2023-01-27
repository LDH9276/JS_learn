$(function(){

  // 1. 변수선언
  let g_nav = $('.g_nav a');
  let total_btn = $('#total');
  let plan_btn = $('#plan');
  let ui_btn = $('#ui');
  let design_btn = $('#design');
  let coding_btn = $('#coding');
  
  g_nav.click(function(){
    $('.g_nav a').removeClass('act');
    $(this).addClass('act');
    return false;
  });

  //3. .g_list > li 마우스오버시 .caption 보이기
  let g_list = $('.g_list a');

  g_list.hover(function(){
    $(this).find('.caption').stop().animate({'bottom':'0px'});
  }, function(){
    $(this).find('.caption').stop().animate({'bottom':'-50px'});
  }
  );

  //갤러리 이미지 클릭시 팝업창 띄우기
  g_list.click(function(){
    let src = $(this).attr('href');
    let cap = $(this).find('span').text();
    
    // 이미지 인덱스를 페이지번호로
    let n = src.substr(src.length-5, 1);


    
    //인덱스 값 구하기
    let i_num = $(this).parent().index()+1;
    

    let modal = 
    `<div class="modal">
      <div class = "center">
        <i class="fas fa-times"></i>
        <i class="fas fa-angle-left"></i> 
        <img src=${src} alt="자세히 보기">
        <span class="m_num">${n} / 12</span>
        <span class="m_cap">${cap}</span>
        <i class="fas fa-angle-right"></i>
      </div>
    </div>`

    //body 맨 뒤로 modal 추가
    $('body').append(modal);

    //모달창 닫기
    $('i.fa-times').click(function(){
      $('.modal').fadeOut();
    });

    //좌우 버튼 클릭시 이미지 나오게
    function moveLeft(){
      if(i_num == 1){
        i_num = 12
      } else {
        i_num--
      }
      img_check();
    }
    function moveRight(){
      if(i_num == 12){
        i_num = 1
      } else {
        i_num++
      }
      img_check();
    }

    //인덱스 4, 5, 7번일 때 확장자 png로 교체
    function img_check(){
      if(i_num == 4 || i_num == 9 || i_num == 11){
        $('.modal img').attr({'src' : './images/img' + i_num + '.png'})
      } else {
        $('.modal img').attr({'src' : './images/img' + i_num + '.jpg'})
      }
    }

    function list_check(){
      if($('.total').hasClass('act') == true){
      console.log('hi');
    }}


    $('i.fa-angle-left').click(function(){
      moveLeft();
      list_check();
      $('.m_cap').text($('.g_list > li').eq(i_num - 1).find('span').text());
      $('.m_num').text(i_num + ' / 12');
    });
    $('i.fa-angle-right').click(function(){
      moveRight();
      $('.m_cap').text($('.g_list > li').eq(i_num - 1).find('span').text());
      $('.m_num').text(i_num + ' / 12');
    });


    return false;
  });

  //갤러리 메뉴 클릭 시 각각 이미지 목록만 보이게 하기
  plan_btn.click(function(){
    $('.total').hide();
    $('.plan').fadeIn();
  });
  design_btn.click(function(){
    $('.total').hide();
    $('.design').fadeIn();
  });
  ui_btn.click(function(){
    $('.total').hide();
    $('.ui').fadeIn();
  });
  coding_btn.click(function(){
    $('.total').hide();
    $('.coding').fadeIn();
  })
  total_btn.click(function(){
    $('.total').hide();
    $('.total').fadeIn();
  })

  


    
});