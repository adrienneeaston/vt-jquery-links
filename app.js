'use strict'

function hello() {
  console.log('Hello world!');
}

hello();

$(document).ready(function() {
  $("#target").on("click", function() {
    $(".notarget").attr("target", "_blank");
  });

  $("#default").on("click", function() {
    $(".notarget").removeAttr("target", "_blank");
  });
});