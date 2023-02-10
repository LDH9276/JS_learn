<?php

//sql 인젝션 방어
function escape($str) {
  return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$name = escape($_POST['name'] ?? '');

//데이터베이스 계정 설정
$mysql_host = 'localhost';
$mysql_user = 'root';
$mysql_password='';
$mysql_db = 'goods';

//데이터베이스 계정 연결하기
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

if(!$conn){
  printf ("데이터베이스 연결 실패: %s\n", mysqli_connect_error());
  exit();
}

//데이터베이스 noddle테이블 데이터 모두 조회하여 변수에 대입
$query = "SELECT * FROM test_drive WHERE name = '$name'";

$result = mysqli_query($conn, $query); //변수에 결과값을 저장한다
include './reult.html';

print "<p> $name 님의 예약정보입니다.</p>";

while( $row = mysqli_fetch_row($result) ) {
  print "<div class='modal'>" .
        "<p>이름: $row[1]</p>" .
        "<p>연락처: $row[2]</p>" .
        "<p>수신여부: $row[3]</p>" .
        "<p>시승지점: $row[4]</p>" .
        "<p>시승차량: $row[5]</p>" .
        "<p>보유차량: $row[6]</p>" .
        "<p>시승날짜: $row[7]</p>" .
        "</div>";
}
?>