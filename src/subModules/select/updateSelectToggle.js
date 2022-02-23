function updateSelectToggle(selectToggle, target) {
  console.log(target);
  //const trendingOptions = ['Games', 'View', 'Music'];
  selectToggle.value = target.dataset.value;
  selectToggle.dataset.index = target.dataset.index;
  selectToggle.innerHTML = target.innerHTML;
}
