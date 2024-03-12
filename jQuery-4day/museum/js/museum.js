$(function () {
  /* 공지팝업 */
  $("#today_close").on("click", function () {
    $("#pop_notice").slideUp();
  });
  $(".btn_popup").on("click", function () {
    $("#pop_notice").slideToggle();
    $(this).toggleClass("on");
  });

  /*섹션1 의 슬라이더  bxslider*/
  $(".slider1").bxSlider({
    auto: true,
    mode: "fade",
    pager: false,
    autoControls: true,
    autoControlsCombine: true,
    onSlideBefore: function ($slideElement, oldIndex, newIndex) {
      $slideElement.children("img").removeClass("on");
    },
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      $slideElement.children("img").addClass("on");
      $(".count").text(newIndex + 1);
    },
  });

  /*섹션1 슬라이더 이미지 사이즈 */
  let winWidth = $(window).innerWidth();
  let winHeight = $(window).innerHeight();
  $(".slider1 img").width(winWidth + winWidth * 0.3);
  $(".slider1 img").height(winHeight + winHeight * 0.3);

  /*fullpage*/
  $("#fullpage").fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    menu: ".right_menu",
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
    afterRender: function () {
      $(".slogon_title").delay(200).animate({ top: "50px", opacity: 1 }, 800);
      $(".slogon_txt").delay(800).animate({ top: "50px", opacity: 1 }, 800);
    },
    afterLoad: function (origin, destination, direction, trigger) {
      if (destination.index == 0 || destination.index == 2) {
        $(".header").removeClass("up");
        $("#right_nav").removeClass("up");
        //$('.section2 .inner,.section4 .inner').css({paddingTop:'300px',opacity:0});
      } else if (destination.index == 1 || destination.index == 3) {
        $(".header").addClass("up");
        $("#right_nav").addClass("up");
      }

      // 1,3 번 섹션의 내용 보이게 하기
      if (destination.index == 1) {
        $(".section2 .inner").animate({ paddingTop: "100px", opacity: 1 });
      } else if (destination.index == 3) {
        $(".section4 .inner").animate({ paddingTop: "100px", opacity: 1 });
      }
    }, //end :  afterLoad 콜백
  }); //end: fullpage

  /*섹션2 슬라이더 slick 슬라이더*/
  $(".slider2").slick({
    dots: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    arrows: false,
  });
  $(".play").on("click", function () {
    $(".slider2").slick("slickPlay");
  });
  $(".pause").on("click", function () {
    $(".slider2").slick("slickPause");
  });

  /*gnb*/
  $(".gnb").on("mouseenter", function () {
    $(".header").addClass("on");
    $(".gnb_bg").stop().slideDown();
    $(".dep2").stop().slideDown();
  });
  $("#pop_notice,.section,.util,#logo").on("mouseenter", function () {
    $(".header").removeClass("on");
    $(".gnb_bg").stop().slideUp();
    $(".dep2").stop().slideUp();
  });
}); //jQ
