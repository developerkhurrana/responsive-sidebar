$(".nav__menu > ul > li").click(function (e) {
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  $(this).find("ul").slideToggle();
  $(this).siblings().find("ul").slideUp();
  $(this).siblings().find("ul").removeClass("active");
});

$(".menu__btn").click(function () {
  $(".sidebar").toggleClass("active");
});
