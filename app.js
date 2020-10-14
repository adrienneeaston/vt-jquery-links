'use strict'

function hello() {
  console.log('Hello world!');
}

hello();

$(document).ready(function() {
  $("button").click(function() {
    $("a").attr("target", "_blank");
  });
});