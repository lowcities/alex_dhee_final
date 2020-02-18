const SECTION = document.querySelector('.section');



$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        let target = $(this.hash);
        let sections = document.querySelectorAll('.section');
        let sectionArray = Array.prototype.slice.call(sections);
        console.log(sectionArray);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        let currentSection = target[0];
        console.log(currentSection);
        if (target.length) {
            
            for (let i = 0; i <= sectionArray.length; i++) {
                if (sectionArray[i] !== currentSection) {
                    sectionArray[i].classList.add('invisible');
                } else {
                    sectionArray[i].classList.remove('invisible');
                }
            }
        } 
        }
    });