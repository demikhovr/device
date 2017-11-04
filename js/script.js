var searchForm = document.querySelector('.user-nav__search-form');
var searchInput = document.querySelector('.user-nav__search-input');
var addCatalog = document.querySelector('.main-nav__add-list');

if (searchInput != null) {
  searchInput.classList.remove('user-nav__search-input--nojs');
}

function onInputFocus() {
  searchForm.classList.add('user-nav__search-form--focus');
}

function onInputBlur() {
  searchForm.classList.remove('user-nav__search-form--focus');
}

if (searchInput != null) {
  searchInput.addEventListener('focus', onInputFocus);
  searchInput.addEventListener('blur', onInputBlur);
}

if (addCatalog != null) {
  addCatalog.addEventListener('focus', function(e) {
    this.classList.toggle('main-nav__add-list--show');
  }, true);

  addCatalog.addEventListener('blur', function(e) {
    this.classList.toggle('main-nav__add-list--show');
  }, true);
}
