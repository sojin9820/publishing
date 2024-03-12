$(".main li h2").on("click", function () {
  $(".main li h2").removeClass("open");
  $(this).addClass("open");
  $(".submenu").slideUp();
  $(this).next().slideDown();
});
