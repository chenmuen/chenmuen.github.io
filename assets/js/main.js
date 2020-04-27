var navbarFlag = false

window.onload = function (e) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const oDiv = document.querySelector('.main-content');
    if (scrollTop >= oDiv.offsetTop && !navbarFlag) {
        navbarIn()
    }

    bindNavbarScrollEvent();
}

function bindNavbarScrollEvent() {

    document.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // var cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const oDiv = document.querySelector('.main-content');
    
        if (scrollTop >= oDiv.offsetTop && !navbarFlag) {
            navbarIn();
        } else if (scrollTop < oDiv.offsetTop && navbarFlag) {
            navbarOut();
        }
    }
}

function navbarIn() {
    const fixed = document.querySelector('.fixed-navbar');
    fixed.classList.remove('animated', 'fadeOutUp', 'faster');
    fixed.classList.add('animated', 'fadeInDown', 'faster');
    navbarFlag = true;
}

function navbarOut() {
    const fixed = document.querySelector('.fixed-navbar');
    fixed.classList.remove('animated', 'fadeInDown', 'faster');
    fixed.classList.add('animated', 'fadeOutUp', 'faster');
    navbarFlag = false;
}