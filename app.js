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

let str = '(GMT-05:00) Eastern Time (US & Canada)';
let myRegex = /(?<=\(GMT).{6}(?=\).*)/;
let result = str.replace(myRegex, 'Hello');
console.log(result);
function process() {
  let 
  let sliced = str.match(myRegex);
  console.log(sliced[0].split(''));
}
