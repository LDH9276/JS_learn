//ajax gallary 가져오기

$(document).ready(function(){

  $('.gall-morebtn').click(function(){
    $('.gall-morebtn').hide();
  $.ajax({
    url: './script/gallary.json',
    dataType: 'json',
    success: function(data){
      let gallary = data.gallImgs;
      let gallaryItems = ''; //빈문자열
      for(let i=0; i<gallary.length; i++){
        gallaryItems += '<li> <figure> <img src="'+gallary[i].src+'" alt="'+gallary[i].alt+'"> </figure> </li>';
      }
      $('#list').html(gallaryItems);
    }
  });
  return false;
  });
});

// ak