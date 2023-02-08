<?php

//sql 인젝션 방어
function escape($str) {
  return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

//변수선언
// $NAME = $_POST['NAME'] ?? '';
// $AREA1 = $_POST['AREA1'] ?? '';
// $AREA2 = $_POST['AREA2'] ?? '';
// $AREA3 = $_POST['AREA3'] ?? '';
// $book_cnt = $_POST['book_cnt'] ?? '';
// $OWNER_NM = $_POST['OWNER_NM'] ?? '';
// $TEL_NUM = $_POST['TEL_NUM'] ?? '';

$name = escape($_POST['name'] ?? '');
$phonenumber = escape($_POST['phonenumber'] ?? '');
$sms = escape($_POST['sms'] ?? '');
$email = escape($_POST['email'] ?? '');
$region = escape($_POST['region'] ?? '');
$s_car = escape($_POST['s_car'] ?? '');
$my_car = escape($_POST['my_car'] ?? '');
$t_date = escape($_POST['t_date'] ?? '');

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
$query = "INSERT INTO test_drive (name, phone, sms, email, region, s_car, my_car, t_date)  VALUES ('$name', '$phonenumber', '$sms', '$email', '$region', '$s_car', '$my_car', '$t_date')";

$result = mysqli_query($conn, $query); //조회결과를 변수에 담기
echo '<p>입력완료<p>';

?>