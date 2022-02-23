function changeStateMenu(menuIcon) {
  const menuNavigation = document.querySelector('.menu__nav');
  const menuButtonsWrapper = document.querySelector('.menu__buttons');

  menuNavigation.classList.toggle('menu__nav_mobile');
  menuIcon.classList.toggle('menu__icon_active');
  menuButtonsWrapper.classList.toggle('menu__buttons_mobile');
}
