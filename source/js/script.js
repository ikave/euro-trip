'use strict';

const pageBody = document.querySelector('.page-body');
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

mainNavToggle.classList.remove('main-nav__toggle--nojs');
menu.classList.remove('menu--nojs');

const openMenu = () => {
  pageBody.classList.toggle('page-body--menu-open');
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
};

mainNavToggle.addEventListener('click', () => {
  openMenu();
});

mainNav.addEventListener('click', (evt) => {
  menuLinks.forEach(link => {
    if (link === evt.target) {
      pageBody.classList.toggle('page-body--menu-open');
      mainNavToggle.classList.add('main-nav__toggle--closed');
      mainNavToggle.classList.remove('main-nav__toggle--opened');
      menu.classList.add('menu--closed');
      menu.classList.remove('menu--opened');
    }
  });
});
