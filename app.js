'use strict'

function changeLinkBehavior() {
  $(document).ready(function() {
    var addTarget = $(".no-target");
    addTarget.attr("target", "_blank");
  });
}

function revertLinkBehavior() {
  $(document).ready(function() {
    var removeTarget = $(".no-target");
    removeTarget.removeAttr("target", "_blank")
  });
}

// no-target - class for all buttons with default behavior of opening in same tab