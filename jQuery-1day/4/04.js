//css 설정한 첫번째 탭의 타이틀에 초기값으로 클래스 적용
$(".main li:eq(0) h2").addClass("openTab");

$(".main li h2").on("click", function () {
  $(this).addClass("openTab");
  $(this).next().show();
  $(this).parent().siblings().children("h2").removeClass("openTab");
  $(this).parent().siblings().children("p").hide();
  //this를 제외한 나머지 h2에서 removeClass
  //this의 p를 제외한 나머지 li > p hide()
});
