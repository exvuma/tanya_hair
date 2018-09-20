
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(rightNow);
let ScrollMagic = require('scrollmagic')
let TweenMax = require('gsap/TweenMax').TweenMax
// console.log('sdf324');

// "October 23rd 2016, 9:30:24 pm"
var controller = new ScrollMagic.Controller();
var blockTween = new TweenMax.to("#ani-img", 1.5, {
    backgroundColor: "red",
    width:"5%",
    height: "auto",
    
});
var scene = new ScrollMagic.Scene({
    triggerElement: '#ani-img'

})
    .setTween
    .addTo(controller)
