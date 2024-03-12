$(".main li h2").on("click", function () {
  let value = $(this).hasClass("open");
  if (value) {
    // #1
    $(this).removeClass("open");
    $(this).next().slideUp();
  } else {
    // #2
    $(this).addClass("open");
    $(this).parent().siblings().children("h2").removeClass("open");
    $(this).next().slideDown();
    $(this).parent().siblings().children(".submenu").slideUp();
  }
}); //on

/*

#1 클래스가 있다 (열려있다 => 닫는다)
#2 클래스가 없다  (닫혀있다 => 열어야 한다) 
hasClass('클래스명')
대상요소가 클래스를 가지고 있는지 아닌지 검사한다. 
가지고 있으면true 없으면 false
*/
