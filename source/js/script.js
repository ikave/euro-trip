'use strict';
var noJs = document.querySelector('.no-js');
noJs.classList.remove('no-js');

var mainNav = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.menu');

// mainNav.classList.remove('page-header--nojs');

mainNavToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    mainNavToggle.classList.remove('main-nav__toggle--closed');
    mainNavToggle.classList.add('main-nav__toggle--opened');
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    mainNavToggle.classList.add('main-nav__toggle--closed');
    mainNavToggle.classList.remove('main-nav__toggle--opened');
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
  }
});
