const nav = document.querySelector('.menu__nav');
const burgerIcon = document.querySelector('.menu__burger');

burgerIcon.addEventListener('click', () => {
  nav.classList.toggle('menu__nav_mobile');
});
