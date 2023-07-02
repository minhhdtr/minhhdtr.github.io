// close hamburger menu on click
$(document).click((event) => {
  if (
    $(".navbar-collapse").hasClass("show") === true &&
    !$(event.target).hasClass("navbar-toggler")
  ) {
    $(".navbar-toggler").click();
  }
});

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});