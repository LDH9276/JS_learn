// 변수선언
let icon = document.querySelectorAll('.tab-mnu01 > li > a > img');
let tab_btn = document.querySelectorAll('.tab-mnu01 > li > a');

// class 및 아이콘 초기화
function defaultImages(){
  for(let i=0; i<icon.length; i++){
    let src = icon[i].getAttribute('src');
    src = src.replace('_on', '_off');
    icon[i].setAttribute('src', src);
    for(let j=0; j<icon.length; j++){
      tab_btn[j].classList.remove('on');
    }
  }
}

/*
defaultImages = 다른 탭 클릭시 초기화
originImage = 탭 클릭시 아이콘 경로 변경
*/

// 클릭 이벤트 추가
for(let t=0; t<tab_btn.length; t++){
  tab_btn[t].addEventListener("click", (el)=>{
    defaultImages(); // 초기화 선언
    tab_btn[t].classList.add('on');
    src = icon[t].getAttribute('src');
    let selectIcon = src.replace('_off', '_on');
    icon[t].setAttribute('src', selectIcon);
    el.preventDefault();
  });
}

/*
i = arritbute, 
j = classList, 
t = addEventListener
*/
