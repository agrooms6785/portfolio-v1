//this is my local JS file
'use strict'

// this function will create an animation that loads before the home page is viewable.
//WILL ADD THIS FEATURE ON LATER VERSIONS
function runPreloadAnimation() {
    console.log('`runPreloadAnimation` ran')
    if ($(window).width() < 765) {
        console.log('Less than 765');
      }
      else {
        console.log('More than 765');
      }
    }

// this function will handle the slide out menu when the burger icon is clicked
function handleBurgerMenu() {
    console.log('`handleBurgerMenu` ran')
    $('.hamburger').on('click', function(event) {
    $('.navbar').toggleClass('menu-open')
  })
}

// callback function
function loadAnimations() {
  runPreloadAnimation()
  handleBurgerMenu()
}

$(loadAnimations)
