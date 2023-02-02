$(document).ready(function(){
  let tab_mnu = $('.tab-mnu01 a');


  tab_mnu.click(function(){

    //1. 변수선언
    let imgUrl = $(this).attr('href');

    $(this).addClass('on').parent().siblings().find('a').removeClass('on');

    //2. 초기화
    tab_mnu.each(function(){
      let defaultUrl = $(this).attr('href');
      $(this).find('img').attr({'src': defaultUrl + '_off.png'});
    })

    //3. 이후 on으로 적용
    if($(this).find('img').attr({'src': (imgUrl + '_off.png')})){
      $(this).find('img').attr({'src':imgUrl + '_on.png'})
    }

    //4. 클릭 이벤트 초기화
    return false;
  })

})