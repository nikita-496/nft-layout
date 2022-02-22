let isShow = false;

const selectToggle = document.querySelector('.select__toggle');
const selectDropdown = document.querySelector('.select__dropdown');

const selectOption = document.querySelector('.select__options');

selectToggle.addEventListener('click', changeStateDropDown);
selectOption.addEventListener('click', setOption);

function changeStateDropDown() {
  isShow = !isShow;
  if (isShow) {
    selectDropdown.style.display = 'block';
  } else {
    selectDropdown.dataShow = isShow;
    selectDropdown.style.display = 'none';
  }
}

function setOption(event) {
  const trendingOptions = ['Games', 'View', 'Music'];
  const target = event.target;
  //если пользователь кликнул по элементу ul
  if (target.className === 'select__options') return;

  setActiveClass(target);
  selectToggle.value = target.dataset.value;
  selectToggle.dataset.index = target.dataset.index;
  selectToggle.innerHTML = trendingOptions[selectToggle.dataset.index];
  changeStateDropDown();
}

function setActiveClass(element) {
  const prevSelectedOptions = document.querySelector('.select__option_selected');
  if (prevSelectedOptions) {
    prevSelectedOptions.classList.remove('select__option_selected');
  }
  element.classList.add('select__option_selected');
}
