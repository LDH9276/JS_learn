
//1. DB및 불러오기로 맞는 ID, PW 선언
//해당 데이터는 변경하지 말아야할 변수라 const로 선언
const originId = 'master';
const originPw = '1234';

//2. 버튼을 누를 때 함수 작동
function submitLogin(){

  //4. input의 값 가져오기
  let id = document.getElementById('id_text').value;
  let pw = document.getElementById('pw_text').value;

  //5. 올바른 값을 가져왔는지 test
  // console.log(id, pw);

  //6. ID, PW 대조해보기
if ((id == '') || (pw == '')) {
    document
        .getElementById('alert')
        .innerHTML = '<p class="alert_txt">ID와 PW를 입력해주세요.</p>';
} else if (id === originId) {
    if (pw === originPw) {
        window
            .location
            .assign("http://ldh9276.github.io/harim_responce_exam/");
    } else {
        document
            .getElementById('alert')
            .innerHTML = '<p class="alert_txt">올바른 PW를 입력해주세요.</p>';
    }
} else {
    document
        .getElementById('alert')
        .innerHTML = '<p class="alert_txt">올바른 ID를 입력해주세요.</p>'
}
return; //함수 종료
}