'use strict'

// no-target - class for all buttons with default behavior of opening in same tab

function changeLinkBehavior() {
    var addTarget = $(".no-target");
    addTarget.attr("target", "_blank");
}

function revertLinkBehavior() {
    var removeTarget = $(".no-target");
    removeTarget.removeAttr("target", "_blank")
}