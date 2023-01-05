function imgOff(){
  document.getElementById(car).src="../img/car01_01.jpg";
  document.getElementById(gnb).style.backgroundImagesrc="url(../img/btn_back.jpg)";
  document.getElementById(footer).src="../img/car01_03.jpg";
} //조명끄기를 클릭하면 작동

function imgOn(){
  document.getElementById(car).src="../img/car01.jpg";
  document.getElementById(gnb).style.backgroundImage="none";
  document.getElementById(footer).src="../img/car03.jpg";
} //조명켜기를 클릭하면 작동
