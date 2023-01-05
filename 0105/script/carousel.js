
//1. 변수
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const prev_btn = document.getElementById('prev_btn');
const next_btn = document.getElementById('next_btn');
const btn = document.querySelectorAll('.btn');

const img_n = slide_img.length; //목록 li의 개수  5
console.log(img_n); //5



const img_w = 100; //li태그의 너비
const m = 0;     //간격
const s_con = 1; //한페이지에 보여질 개수

let count = 0;

// 감싸는 부모요소의 너비를 구하기
// slide.style.width=(img_w+m)*img_n-m+'px';
slide.style.width=500;
//(300+30)*5-30 = 1620

//왼쪽으로 움직이는 슬라이드 함수
function mslide(n){
  slide.style.left=(img_w+m)*-n+'%';
  count = n;
  console.log(slide.style.left);//-330, -660, 0
  console.log(count);
}
//왼쪽 버튼 클릭시 왼쪽방향으로 움직이게 한다.
prev_btn.addEventListener('click', function(){ 
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);
  }
  clearInterval(Timer);
});

//오른쪽 버튼을 클릭시 오른쪽 방향으로 움직이게 한다.
next_btn.addEventListener('click', function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
  clearInterval(Timer);
});

// 매 3초마다 자동으로 함수를 호출하여 움직이게 한다.
//시간 객체 - setInterval(함수명, 시간)

let Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
},3000);

//마우스를 양쪽 버튼에서 벗어날 시 시간을 생선하며 움직이게 한다.
for(let i = 0; i < btn.length; i++){btn[i].addEventListener('mouseout', function(){
  // alert('event On!');
  {Timer = setInterval(function(){
    if(count < img_n-s_con){
        mslide(count+1);
    }else{
        mslide(0);
      }
    },3000);
  }
});}
