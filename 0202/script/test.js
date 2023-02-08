
    const input = document.querySelectorAll('input');
    const userName = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phoneNumber = document.querySelector('#phonenumber');
    const region = document.querySelector('#region');
    const s_car = document.querySelector('#s_car');
    const my_car = document.querySelector('#my_car');
    const t_date = document.querySelector('#t_date');
    const submitBtn = document.querySelector('#submitBtn');


    submitBtn.addEventListener('click', function(e){
      let alert00 = document.querySelector('#t00');
      
      alert00.innerText = '';

      if(userName.value === ''){
        e.preventDefault();
        alert00.innerText = '이름을 입력해주세요.';
      }
      else if(phoneNumber.value === ''){
        e.preventDefault();
        alert00.innerText = '전화번호를 입력해주세요.';
      }
      else if(email.value === ''){
        e.preventDefault();
        alert00.innerText = '이메일을 입력해주세요.';
      }
      else if(email.value.indexOf('@') === -1){
        e.preventDefault();
        alert00.innerText = '이메일 형식이 올바르지 않습니다.';
      }
      else if(email.value.indexOf('.') === -1){
        e.preventDefault();
        alert00.innerText = '이메일 형식이 올바르지 않습니다.';
      }
      else if(region.value === ''){
        e.preventDefault();
        alert00.innerText = '지역을 선택해주세요.';
      }
      else if(s_car.value === ''){
        e.preventDefault();
        alert00.innerText = '차종을 선택해주세요.';
      }
      else if(my_car.value === ''){
        e.preventDefault();
        alert00.innerText = '차량을 입력해주세요.';
      }
      else if(t_date.value === ''){
        e.preventDefault();
        alert00.innerText = '날짜를 선택해주세요.';
      }
    });
      
      phoneNumber.addEventListener('keyup', function(){
        const pNum = phoneNumber.value;
        if(pNum.length === 3 || pNum.length === 8){
          phoneNumber.value = pNum + '-';
        }
      });