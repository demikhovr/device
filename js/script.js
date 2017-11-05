var searchForm = document.querySelector('.user-nav__search-form');
var searchInput = document.querySelector('.user-nav__search-input');
var addCatalog = document.querySelector('.main-nav__add-list');
var modal = document.querySelectorAll('.modal');
var modalWriteUs = document.querySelector('.modal--write-us');
var modalMap = document.querySelector('.modal--map');
var writeUsOpenBtn = document.querySelector('.contacts__btn');
var mapOpenBtn = document.querySelector('.contacts__map');
var modalCloseBtn = document.querySelectorAll('.modal__close-btn');

function onInputFocus() {
  searchForm.classList.add('user-nav__search-form--focus');
}

function onInputBlur() {
  searchForm.classList.remove('user-nav__search-form--focus');
}

function closeWriteUs() {
  modalWriteUs.classList.remove('modal--show');
}

function closeMap() {
  modalMap.classList.remove('modal--show');
}

if (searchInput != null) {
  searchInput.classList.remove('user-nav__search-input--nojs');
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

if (modalWriteUs != null) {
  writeUsOpenBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalWriteUs.classList.add('modal--show');
  });
}

if (modalMap != null) {
  mapOpenBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalMap.classList.add('modal--show');
  });
}

if (modal != null) {
  for (var i = 0; i < modal.length; i++) {
    modal[i].addEventListener('click', function(e) {
      if (e.target.classList.contains('modal__close-btn')) {
        this.classList.remove('modal--show');
      }
    })
  }
}
