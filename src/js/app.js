import Header from './header';

Header.initEvents();

const autosuggestInput = document.querySelector('.js-autosuggest-input');
const autosuggestList = document.querySelector('.js-autosuggest-list');
autosuggestInput.addEventListener('focus', () => {
  autosuggestList.classList.add('is-active');
});

autosuggestInput.addEventListener('blur', () => {
  autosuggestList.classList.remove('is-active');
});
