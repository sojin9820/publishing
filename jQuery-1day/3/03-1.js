$(".main li h2").on("click", function () {
  $(this).addClass("open");
  $(this).parent().siblings().children("h2").removeClass("open");
  $(this).next().slideDown();
  $(this).parent().siblings().children(".submenu").slideUp();
});
