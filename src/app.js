
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(rightNow);
let ScrollMagic = require('scrollmagic')
let TweenMax = require('gsap/TweenMax').TweenMax
var $ = require("jQuery");
// let TweenMax = require('gsap/TweenMax').TweenMax

import  { TweenLiteTweenLite, CSSPluginCSSPlugin } from  'gsap';
// console.log('sdf324');

// "October 23rd 2016, 9:30:24 pm"
var controller = new ScrollMagic.Controller();
// tween.to docs :\ greensock.com/docs/TweenMax/static.to()
// var blockTween = new TweenMax.to("#ani-img", 1.5, {
//   scale: 1.2
//   // backgroundColor: "red",
//   // width:"5%",
//   // height: "auto",
// });
var blockTween = new TweenMax.to(".ani-img.hero", 1.5, {
  scale: 1.2
})
var blockTween2 = new TweenMax.to(".is-5>.ani-img", 1.5, {
    scale: 1.2,
})
var scene = new ScrollMagic.Scene({
  triggerElement: "#some", // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
    .setTween(blockTween2)
  //  .setPin(".is-5>.ani-img")// the element we want to pin



// Add Scene to ScrollMagic Controller
controller.addScene(scene);
// .addTo(controller)


$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
function scrollTo(cur) {
    var element = document.getElementById("cur");
    debugger
    
}