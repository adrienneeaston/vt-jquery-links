'use strict'

// no-target - class for all buttons with default behavior of opening in same tab

function changeLinkBehavior() {
  let addTarget = $(".no-target");
  addTarget.attr("target", "_blank");
}

function revertLinkBehavior() {
  let removeTarget = $(".no-target");
  removeTarget.removeAttr("target", "_blank")
}

function checkForTarget() {
  let tagInfo = $("a");

  for (let i = 0; i < tagInfo.length; i++) {
    let current = tagInfo[i];
    let flag = false;
    let classIndex;
    for (let j = 0; j < current.attributes.length; j++) {
      if (current.attributes[j].name === "target") {
        flag = true;
      } else if (current.attributes[j].name === "class" ) {
        classIndex = j;
      }
    }
    console.log(flag);
    console.log(typeof current);
    // if (flag === false) {
    //   current.attributes[classIndex].nodeValue = "no-target";
    //   // current.addClass("no-target");
    //   // current.attr("class", "no-target");
    // }      
    console.log(current);
  }
  console.log(tagInfo[1].attributes);
}


  // console.log('default', tagInfo[0]);
  // console.log('new tab', tagInfo[1]);
  // console.log(typeof tagInfo[0]);
  // console.log(tagInfo);

  // let current = tagInfo[1];
  // for (let i = 0; i < current.attributes.length; i++) {
  //   if (current.attributes[i].name === "target") {
  //     console.log("SUCCESS");
  //   } else {
  //     console.log("poop");
  //   }
  // }

  // if (typeof tagInfo[0]['target'] === typeof undefined | tagInfo[0]['target'] === false) {
  //   console.log("default", "no target");
  // } else console.log("default", "yes target");

  // if (typeof tagInfo[1]['target'] === typeof undefined | tagInfo[1]['target'] === false) {
  //   console.log("new tab", "no target");
  // } else console.log("new tab", "yes target");

  // // if (tagInfo[0].attr("target")) {
  // //   console.log("true");
  // // } else console.log("false");

  // // if (tagInfo[1].attr("target")) {
  // //   console.log("default", "true");
  // // } else console.log("new tab", "false");