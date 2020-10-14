'use strict'

$(document).ready(function() {
  $("#target-button").on("click", function() {
    $(".no-target").attr("target", "_blank");
  });

  $("#default-button").on("click", function() {
    $(".no-target").removeAttr("target", "_blank");
  });
});