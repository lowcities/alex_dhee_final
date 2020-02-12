const HEADER = document.querySelector('.header-banner');
const MENUWRAPPER =document.querySelector('.menu-wrapper');
const MENU = document.getElementById('menu');
const NAVBUTTON = document.querySelector('.nav-button');
const LINK = document.querySelectorAll('.nav-item');

//Function to show or hide menu bar depending on screen size
function checkSize() {
    if(window.innerWidth <= 700) {
        MENU.classList.remove('menu-show');
        MENU.classList.add('sticky-mobile');
        NAVBUTTON.classList.remove('open');
  } else {
        MENU.classList.add('menu-show');
        MENU.classList.remove('sticky-mobile');
      }
    }

// Function to open or close nav menu when button is clicked
function mobileMenuToggle(e) {
    // if nav menu isnt visible
    if (!MENU.classList.contains('menu-show')) {
        // initiate css animation for nav button when clicked
        NAVBUTTON.classList.add('open');
        // open nav menu
        MENU.classList.add('menu-show');
    }
    // if menu is visible
    else {
        // revert button to closed state
        NAVBUTTON.classList.remove('open');
        // hide nav menu
        MENU.classList.remove('menu-show');
    }
  }    

//creates a sticky nav bar when window is scrolled to the top of nav bar.
function stickyNav(e) {
    if(window.scrollY >= HEADER.offsetHeight) {
        console.log("test");
        MENUWRAPPER.classList.add('sticky-nav-bar');
    } else  {
      MENUWRAPPER.classList.remove('sticky-nav-bar');
    }
  }

//Creates a sticky mobile toggle button when window is scrolled to top of mobile menu button
function stickyButton() {
    if(window.innerWidth <= 767 && window.scrollY >= HEADER.offsetHeight) {
      NAVBUTTON.classList.add('sticky-nav-button');
  //    menuBar.classList.add('sticky-mobile');
    }
    else {
      NAVBUTTON.classList.remove('sticky-nav-button');
    }
  }  

//Function closes mobile menu if a link is clicked.
LINK.forEach(function(item) {
    item.addEventListener('click', checkSize);
  });

    window.addEventListener('load', checkSize);
    window.addEventListener('scroll', stickyNav);
    window.addEventListener('scroll', stickyButton);
    NAVBUTTON.addEventListener('click', mobileMenuToggle);
    $(window).resize(checkSize);
