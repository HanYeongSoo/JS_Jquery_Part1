$(document).ready(function () {
  init();
  initEvent();
});

var $images = null;

function init() {
  $images = $("#container1 img");
}

function initEvent() {
  $("#btnStart").click(function () {
    showImage();
  });
}

function showImage() {
  // 이미지의 개수 구하기
  var length = $images.length;
  alert(length);

  // 이미지 나열하기
  for (var i = 0; i < length; i++) {
    // eq() 를 이용하여 인덱스에 맞는 이미지를 저장하고 있다.
    var $img = $images.eq(i);

    // 위치의 값을 구하기
    var x = 100 + (i % 3) * 200;
    var y = 100 + parseInt(i / 3) * 200;

    // 이미지의 위치를 설정하는 부분
    $img.css({
      left: x,
      top: y,
    });
  }
}
