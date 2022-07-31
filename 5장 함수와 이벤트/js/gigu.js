var $gigu = null; // 전역변수로 선언

$(document).ready(function () {
  initialize();
  eventJigu();
});

// 전역변수를 초기화
function initialize() {
  // 쏘니를 찾기
  $gigu = $("#gigu");
}

// 이벤트와 관련된 내용을 함수로 등록
function eventJigu() {
  // 버튼에 쏘니를 등록
  $("#btnStart").click(function () {
    // 쏘니를 움직이기
    // 쏘니 위치값 구하기
    var x = parseInt($("#txtX").val());
    var y = parseInt($("#txtY").val());
    console.log("x : " + x);
    console.log("y : " + y);

    moveGigu(x, y);
  });
}

// 지구본의 움직이는 기능을 구현해놓은 함수
function moveGigu(x, y) {
  console.log("$gigu : " + $gigu);
  if (x >= 0 && x <= 500 && y >= 0 && y <= 300) {
    $gigu.css({
      left: x,
      top: y,
    });
  } else {
    alert("입력된 값이 범위를 초과했습니다.");
  }
}
