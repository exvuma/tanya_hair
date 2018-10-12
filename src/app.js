
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(rightNow);
// import  { TweenLiteTweenLite, CSSPluginCSSPlugin } from  'gsap';
//https://wikiki.github.io/components/carousel/
var $ = require("jQuery");
let ScrollMagic = require('scrollmagic')
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
let Gasp = require('gasp');
// require( "animation.gsap");
// let TweenMax = require('gsap/TweenMax').TweenMax
require( 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
let TweenMax = require( 'gsap/src/uncompressed/TweenMax');
let TimelineMax = require( 'gsap/src/uncompressed/TimelineMax');

// let TweenMax = Gasp.TweenMax

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
var blockTweenContact = new TweenMax.to("#contact", 1.5, {
    scale: 1.2,
})
var blockTweenServices = new TweenMax.to(".is-5>.ani-img", 1.5, {
    scale: 1.2,
})
var sceneContact= new ScrollMagic.Scene({
  triggerElement: "#contact", // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
.setTween(blockTweenContact)
var sceneServices = new ScrollMagic.Scene({
  triggerElement: "#services", // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
    .setTween(blockTweenServices)
    //  .setPin(".is-5>.ani-img")// the element we want to pin
    
    
    
    // Add Scene to ScrollMagic Controller
controller.addScene(sceneContact);
controller.addScene(sceneServices);
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