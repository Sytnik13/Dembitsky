$("#toggle-menu").click(function () {
    $(".nav-it").toggleClass("show");
});
$(document).ready(function () {
  setTimeout(function () {
      $(".tabs-with-content").addClass("js-start-animation");
  }, 300);
  setTimeout(function () {
      $("body").addClass("normal-body");
  }, 2000);
});
