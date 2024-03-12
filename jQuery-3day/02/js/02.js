$(window).on("scroll", function () {
  let nowScroll = $(window).scrollTop();
  nowScroll = Math.ceil(nowScroll); //Math.ceil() 소숫점 없이 올림 처리
  $("h1 span").text(nowScroll + "px");
  let index;
  if (nowScroll > 0 && nowScroll < 500) {
    index = 0;
  }
  if (nowScroll > 501 && nowScroll < 1000) {
    index = 1;
  }
  if (nowScroll > 1001 && nowScroll < 1500) {
    index = 2;
  }
  if (nowScroll > 1501 && nowScroll < 2000) {
    index = 3;
  }
  if (nowScroll > 2001 && nowScroll < 2500) {
    index = 4;
  }
  $("h2").text(index);
  $("ul.gnb li").eq(index).children("a").addClass("act");
  $("ul gnb li").eq(index).siblings().children("a").removeClass("act");
});
