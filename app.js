'use strict'

$(document).ready(function() {
  $("#target-button").on("click", function() {
    var addTarget = $(".no-target");
    addTarget.attr("target", "_blank");
  });

  $("#default-button").on("click", function() {
    var removeTarget = $(".no-target");
    removeTarget.removeAttr("target", "_blank")
  });
});

// target-button - id for button that changes 'a' tags to open into a new tab
// default-button - id for button that changes 'a' tags back to pre-set behavior
// no-target - class for all buttons with default behavior of opening in same tab