const HEADER = document.querySelector('.header-banner');
const MENUWRAPPER =document.querySelector('.menu-wrapper');
const MENU = document.getElementById('menu');
const NAVBUTTON = document.querySelector('.nav-button');
const LINK = document.querySelectorAll('.nav-item');
const SECTION = document.querySelector('.section');
const LOGO = document.querySelector('.logo');

//Function to show or hide menu bar depending on screen size
function checkSize() {
    if(window.innerWidth <= 725) {
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
  let totalHeight = HEADER.offsetHeight - MENUWRAPPER.offsetHeight;
  console.log(totalHeight);
    if(window.scrollY >= totalHeight) {
        MENUWRAPPER.classList.add('sticky-nav-bar');
    } else  {
      MENUWRAPPER.classList.remove('sticky-nav-bar');
    }
  }

//Creates a sticky mobile toggle button when window is scrolled to top of mobile menu button
function stickyButton() {
  
    if(window.scrollY >= HEADER.offsetHeight) {
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

//Function enables smooth scrolling to sections clicked from the navbar/menu.
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        let target = $(this.hash);
        let navBarHeight = MENUWRAPPER.offsetHeight;
        let mobileNavHeight = NAVBUTTON.offsetHeight;
        let headerHeight = HEADER.offsetHeight;
        let scrollToPositionLarge = headerHeight + navBarHeight;
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        let currentSection = target[0];
        console.log(currentSection);
        console.log(headerHeight);
           if (target.length) {
            //show content in focus and hide everything else
            hideContent(currentSection);
            //scroll to top of section
            $('html,body').animate({
                 scrollTop: scrollToPositionLarge
            }, 1000);
            //check size to close menu if neccesary
            checkSize();
            return false; 
            }
            else {
                $('html,body').animate({
                 scrollTop: target.offset().top - 110
            }, 1000);
            hideContent(currentSection);    
            checkSize();
            return false;          
        }
    }
});

// function hides content not in focus
const hideContent = (current) => {
  let sections = document.querySelectorAll('.section');
  let sectionArray = Array.prototype.slice.call(sections);
  sectionArray.forEach(section => {
    if(section === current) {
      section.classList.remove('invisible');
    } else {
      section.classList.add('invisible');
    }
  });
}


  
window.addEventListener('load', checkSize);
window.addEventListener('scroll', stickyNav);
window.addEventListener('scroll', stickyButton);
NAVBUTTON.addEventListener('click', mobileMenuToggle);
$(window).resize(checkSize);
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
