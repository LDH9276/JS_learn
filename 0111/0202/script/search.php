<?php

//sql 인젝션 방어
function escape($str) {
  return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$name = escape($_POST['name'] ?? '');

//데이터베이스 계정 설정
$mysql_host = 'localhost';
$mysql_user = 'leedh9276';
$mysql_password='vmfhsxmdpsem#1';
$mysql_db = 'leedh9276';

//데이터베이스 계정 연결하기
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

if(!$conn){
  printf ("데이터베이스 연결 실패: %s\n", mysqli_connect_error());
  exit();
}

//데이터베이스 noddle테이블 데이터 모두 조회하여 변수에 대입
$query = "SELECT * FROM test_drive WHERE name = '$name'";

$result = mysqli_query($conn, $query); //변수에 결과값을 저장한다

include 'header.php';

//결과값이 없다면
if(mysqli_num_rows($result) == 0){
  print "<div class = 'result-info'>
          <p> $name 님의 예약정보가 없습니다.</p>
        </div>";
  include 'footer.php';
  exit();
}

$date = $row[8];

$year = substr($date, 0, 4);
$month = substr($date, 4, 2);
$day = substr($date, 6, 2);

$date = $year . "년 " . $month . "월 " . $day . "일";

print "
<p class='nmain'> $name 님의 예약정보입니다.</p>
<div class = 'result-info'>
";

while( $row = mysqli_fetch_row($result) ) {
  print   "<p> 성함 : " . $row[1] . "</p>" . 
          "<p> 연락처 : " . $row[2] . "</p>";

          if($row[3] === 1){
            print "<p> SMS 수신여부 : O</p>" ; 
          } else {
            print "<p> SMS 수신여부 : X</p>" ;
          }

  print   "<p> 이메일 : " . $row[4] . "</p>" ;

          //date to string
          $date = $row[8];
          //date to year, month, day yyyy-mm-dd
          $year = substr($date, 0, 4);
          $month = substr($date, 5, 2);
          $day = substr($date, 8, 2);

          //date to string
          $date = $year . "년 " . $month . "월 " . $day . "일";

  print   "<p> 시승날짜 : " . $date . "</p>" .
          "<p> 시승지점 : " . $row[5] . "</p>" .
          "<p> 시승차량 : " . $row[6] . "</p>" .
          "<p> 보유차량 : " . $row[7] . "</p>" . 
          "</div>" ;
  print '<a href="./casper-test.html" title="돌아가기" class="btn reset">다시 신청하기</a>';
  print '<a href="./casper-search.html" title="조회하기" class="btn submit">다시 조회하기</a>';
}


include 'footer.php';
