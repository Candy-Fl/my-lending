const toggler = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav');

navList.classList.remove('main-nav--nojs');

toggler.addEventListener('click',() => {
    if (navList.classList.contains('main-nav--closed')) {
        navList.classList.remove('main-nav--closed');
        navList.classList.add('main-nav--opened');
    }
    else {
        navList.classList.remove('main-nav--opened');
        navList.classList.add('main-nav--closed');
    }
})