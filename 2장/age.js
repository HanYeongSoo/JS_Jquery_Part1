// 버튼을 누를 시 함수가 실행
function calc() {
  var currentYear = 2022; // 현재 년도 저장
  var birthYear = prompt("태어난 연도를 알려주세요", "YYYY"); // 입력받은 값 저장
  var age = 0; // age변수 초기화

  age = currentYear - birthYear + 1; // 현재년도에서 입력년도 +1을 통해 나이를 계산
  // document.querySelector("#result").innerHTML =
  //   "당신의 나이는 " + age + "살 입니다.";
  document.getElementById("result").innerText = // 출력
    "당신의 나이는 " + age + "살 입니다";
}
