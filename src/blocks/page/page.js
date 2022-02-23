const EntryPoint = (function () {
  function init() {
    EntryPoint.select.getDropdownState();
    EntryPoint.select.getOption();
  }
  return {
    init: init,
  };
})();
