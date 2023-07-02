// close navbar on hamburger menu
$(document).click(function (event) {
  if (
    $(".navbar-collapse").hasClass("show") === true &&
    !$(event.target).hasClass("navbar-toggler")
  ) {
    $(".navbar-toggler").click();
  }
});
