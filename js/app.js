const MENU = document.getElementById('menu');
const NAVBUTON = document.querySelector('.nav-button');

//Function to show or hide menu bar depending on screen size
function checkSize() {
    if(window.innerWidth <= 767) {
        MENU.classList.remove('menu-show');
        MENU.classList.add('sticky-mobile');
        NAVBUTTON.classList.remove('open');
  } else {
        MENU.classList.add('menu-show');
        MENU.classList.remove('sticky-mobile');
      }
    }

    window.addEventListener('load', checkSize);
    $(window).resize(checkSize);
