import Masonry from 'masonry-layout';
import Header from './header';

let masonryList;

window.addEventListener('load', () => {
  masonryList = document.querySelector('.js-masonry');
  if (masonryList) {
    const msnry = new Masonry( '.js-masonry', {
      itemSelector: '.grid-cards-item',
      gutter: 20,
      columnWidth: 380
    });
  }
})

Header.initEvents();

const autosuggestInput = document.querySelector('.js-autosuggest-input');
const autosuggestList = document.querySelector('.js-autosuggest-list');

if (autosuggestInput) {
  autosuggestInput.addEventListener('focus', () => {
    autosuggestList.classList.add('is-active');
  });

  autosuggestInput.addEventListener('blur', () => {
    autosuggestList.classList.remove('is-active');
  });
}

