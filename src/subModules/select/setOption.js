function setOption(event) {
  const target = event.target;
  //если пользователь кликнул по элементу ul
  if (target.className === 'select__options') return;
  setActiveClass(target);
}
