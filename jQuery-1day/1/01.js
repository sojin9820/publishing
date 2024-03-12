$(function () {
  //캐릭터 이미지 클릭 캐릭터 하나씩 사라지기
  $(".sunban li img").on("click", function () {
    $(this).fadeOut(700); //#1
  });
  //돈 클릭 모든 캐릭터가 다 나타난다.
  $(".money li img").on("click", function () {
    $(".sunban li img").fadeIn(700);
  });
  //총 클릭 인덱스 3번 캐릭터 사라진다.
  $(".gun").on("click", function () {
    $(".sunban li:eq(3) img").fadeOut(700);
  });
}); //jQ

/* 
  #1 this => 현재 이벤트가 적용된 대상
*/
