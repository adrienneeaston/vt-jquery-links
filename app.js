'use strict'

function addCssClassToLinks() {
  let selectedLinks = $("a[target!='_blank']")
  selectedLinks.addClass("no-target");
}

function changeLinkBehavior() {
  let selectedLinks = $(".no-target");
  selectedLinks.attr("target", "_blank");
}

function revertLinkBehavior() {
  let selectedLinks = $(".no-target");
  selectedLinks.removeAttr("target", "_blank")
}