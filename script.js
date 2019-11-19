//this is my local JS file
'use strict'

// let screenSize = $(window.width())

// this function will create an animation that loads before the home page is viewable.
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
    event.preventDefault()
    $('.navbar').addClass('menu-open')
    $('.menu').slideToggle()
  })
}



// callback function
function loadAnimations() {
  runPreloadAnimation()
  handleBurgerMenu()
}

$(loadAnimations)