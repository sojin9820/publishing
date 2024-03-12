$(function () {
  $(".main").on({
    /* over */
    mouseenter: function () {
      $(this).children("ul").slideDown(600);
    },
    /* out */
    mouseleave: function () {
      $(this).children("ul").slideUp(600);
    },
  });
}); //jQ

/* 
  slideUp() height 값을 0으로 만들면서 display : none
  slideDown() height 값으로 만들면서 display:block
  slideToggle() : slideUp <=> slideDown 토글

  DOM 탐색 메서드
  children() 자식 
  children().children() 자식의 자식
  find() 후손
  parent() 부모
  parents() 조상
  siblings() 형제
  next() 나 바로 뒤에 나오는 객체(형제)
  prev() 나 바로 앞에 나오는 객체(형제)
  eq() 인덱스 번째
*/
