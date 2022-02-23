let isShow = false;
function changeStateDropDown(selectToggle) {
  const selectDropdown = selectToggle.nextSibling;
  function change() {
    isShow = !isShow;
    if (isShow) {
      selectDropdown.style.display = 'block';
    } else {
      selectDropdown.style.dataShow = isShow;
      selectDropdown.style.display = 'none';
    }
  }
  return change();
}
