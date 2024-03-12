//css 설정한 첫번째 탭의 타이틀에 초기값으로 클래스 적용
$(".main li:eq(0) h2").addClass("openTab");

$(".main li h2").on("click", function () {
  $(".main li h2").removeClass("openTab");
  $(".main li p").hide();
  $(this).addClass("openTab");
  $(this).next().show();
});
