// this is not a good idea so i use css instead
// $(window).resize(function () {
//   if ($(window).width() < 768) {
//     $(".nav-link").removeClass("active");
//   }
// });

// $(".nav-link").click(function () {
//   $(".navbar-toggler").click();
// });

// close navbar on hamburger menu
$(document).click(function (event) {
  if (
    $(".navbar-collapse").hasClass("show") === true &&
    !$(event.target).hasClass("navbar-toggler")
  ) {
    $(".navbar-toggler").click();
  }
});
