// jQuery ready for wp
jQuery(document).ready(function ($) {
  $(".hidden_button_for_exit_intent").click(function () {
    $(".confirmation").fadeIn();
  });
  // make .confirmation div visible on exit intent
  $(document).on("mouseleave", function (e) {
    if (e.clientY < 1) {
      // triger hidden button and click
      $(".hidden_button_for_exit_intent").click();
    }
  });

  // select .confirmation and make it dispaly none if its not after 5 second
  setTimeout(function () {
    $(".confirmation").fadeOut();
  }, 5000);
});
