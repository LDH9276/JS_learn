<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>서점DB 출력 예제</title>
</head>
<body>
<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

//1. 변수 선언 (서버주소, 아이디, 비밀번호, 데이터베이스명)
$mysql_host = 'localhost';
$mysql_user = 'leedh9276';
$mysql_password='vmfhsxmdpsem#1';
$mysql_db = 'leedh9276';

//2. 데이터베이스 연결
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

//3. 데이터베이스 연결 확인
if(mysqli_connect_errno()){
  printf ("데이터베이스 연결 실패: %s\n", mysqli_connect_error());
  exit();
}


//4. 데이터 조회하기
$query = "SELECT * FROM book_store";
$result = mysqli_query($conn, $query); //조회결과를 변수에 담기

//5. 출력하기
print "<table border=1>";
print "<tr><th>서점코드</th><th>상호</th><th>주소(시/도)</th><th>주소(구/군)</th><th>주소(동/면)</th><th>보유서적수</th><th>대표자 성명</th><th>대표자 전화번호</th></tr>";
while( $row = mysqli_fetch_row($result) ) {
  print "<tr><td>" . $row[0] . "</td>" . 
          "<td>" . $row[1] . "</td>" . 
          "<td>" . $row[2] . "</td>" . 
          "<td>" . $row[3] . "</td>". 
          "<td>" . $row[4] . "</td>". 
          "<td>" . $row[5] . "</td>". 
          "<td>" . $row[6] . "</td>". 
          "<td>" . $row[7] . "</td></tr>";
}
print "</table>";
mysqli_free_result($result);
mysqli_close($conn);
?>

<a href="./bookstore_insert.html" title="데이터 입력">서점 정보 입력하러가기</a>
</body>
</html>

