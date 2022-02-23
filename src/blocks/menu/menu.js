EntryPoint.menu = (function () {
  function getMenuState() {
    const menuIcon = document.querySelector('.menu__icon');
    menuIcon.addEventListener('click', () => changeStateMenu(menuIcon));
  }
  return {
    getMenuState,
  };
})();
