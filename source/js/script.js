'use strict';

var mainNav = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.menu');

mainNavToggle.classList.remove('main-nav__toggle--nojs');
menu.classList.remove('menu--nojs');
// mainNav.classList.remove('page-header--nojs');

mainNavToggle.addEventListener('click', function () {
  if (mainNavToggle.classList.contains('main-nav__toggle--closed')) {
    mainNavToggle.classList.remove('main-nav__toggle--closed');
    mainNavToggle.classList.add('main-nav__toggle--opened');
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
  } else {
    mainNavToggle.classList.add('main-nav__toggle--closed');
    mainNavToggle.classList.remove('main-nav__toggle--opened');
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
  }
});
