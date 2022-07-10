const filterBox = document.querySelectorAll('.projects__item');

document.querySelector('.filter-menu').addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return false;
  let filterClass = event.target.dataset['f'];

  filterBox.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });
});
