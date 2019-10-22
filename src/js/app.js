import Masonry from 'masonry-layout';
import Header from './header';

let masonryList;

window.addEventListener('load', () => {
  masonryList = [...document.querySelectorAll('.js-masonry')];
  if (masonryList.length) {
    masonryList.forEach(elem => {
      const msnry = new Masonry( elem, {
        itemSelector: '.js-masonry-item',
        gutter: 20,
      });
    })
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

