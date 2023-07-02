// close hamburger menu on click
$(document).click((event) => {
  if (
    $(".navbar-collapse").hasClass("show") === true &&
    !$(event.target).hasClass("navbar-toggler")
  ) {
    $(".navbar-toggler").click();
  }
});
