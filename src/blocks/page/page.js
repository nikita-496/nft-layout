const EntryPoint = (function () {
  function init() {
    EntryPoint.select.getDropdownState();
    EntryPoint.select.getOption();
    EntryPoint.menu.getMenuState();
  }
  return {
    init: init,
  };
})();
