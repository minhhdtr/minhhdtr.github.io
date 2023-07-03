// close hamburger menu on click
$(document).click((event) => {
  if (
    $(".navbar-collapse").hasClass("show") === true &&
    !$(event.target).hasClass("navbar-toggler")
  ) {
    $(".navbar-toggler").click();
  }
});

// show back to top button when scroll down
$(window).scroll(() => {
  if ($(this).scrollTop() > 20) {
    $("#btn-back-to-top").css("display", "block");
  } else {
    $("#btn-back-to-top").css("display", "none");
  }
});

// back to top when click on button
$("#btn-back-to-top").click(() => {
  $("html, body").scrollTop(0);
});
