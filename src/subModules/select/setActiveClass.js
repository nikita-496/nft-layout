function setActiveClass(element) {
  const prevSelectedOptions = document.querySelector('.select__option_selected');
  if (prevSelectedOptions) {
    prevSelectedOptions.classList.remove('select__option_selected');
  }
  element.classList.add('select__option_selected');
}
