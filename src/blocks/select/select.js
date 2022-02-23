EntryPoint.select = (function () {
  let activelectToggle = null;
  function getDropdownState() {
    const listSelectToggle = getSelectToggle();
    listSelectToggle.forEach((selectToggle) => {
      selectToggle.addEventListener('click', () => changeStateDropDown(selectToggle));
      selectToggle.addEventListener('click', () => (activelectToggle = selectToggle));
    });
  }

  function getOption() {
    const listSelectOptions = document.querySelectorAll('.select__options');
    listSelectOptions.forEach((selectOptions) => {
      selectOptions.addEventListener('click', setOption);
      selectOptions.addEventListener('click', (event) =>
        updateSelectToggle(activelectToggle, event.target)
      );
      selectOptions.addEventListener('click', () => changeStateDropDown(activelectToggle));
    });
  }

  return {
    getDropdownState,
    getOption,
  };
})();
