$(document).ready(function(){
  let tab_mnu = $('.tab-mnu01 a');

  // replace ('찾을 문자', '대채할 문자')

  tab_mnu.click(function(){

    //변수선언
    let imgUrl = $(this).find('img').attr('src');
    let changeUrl = imgUrl.replace('_off', '_on');

    //초기화
    tab_mnu.each(function(){
      let presentUrl = $(this).find('img').attr('src');
      let defaultUrl = presentUrl.replace('_on', '_off');
      $(this).find('img').attr('src', defaultUrl);
    });

    //스타일 적용
    $(this).addClass('on').parent().siblings().find('a').removeClass('on');
    $(this).find('img').attr('src', changeUrl);
    
    //4. 클릭 이벤트 초기화
    return false;
  })

})
