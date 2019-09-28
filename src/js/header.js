const burgerTrigger = document.querySelector('.js-burger-trigger');
const userinfoTrigger = document.querySelector('.js-userinfo-trigger');
const burgerMenu = document.querySelector('.js-burger-menu');
const userInfo = document.querySelector('.js-userinfo');
const userInfoClose = document.querySelector('.js-userinfo-close');

const handleBurgerTriggerClick = (e) => {
  e.preventDefault();
  burgerMenu.classList.toggle('is-active');
  burgerTrigger.classList.toggle('is-active');
};

const handleUserinfoTriggerClick = (e) => {
  e.preventDefault();
  userInfo.classList.toggle('is-active');
};

const handleUserinfoCloseClick = (e) => {
  e.preventDefault();
  userInfo.classList.toggle('is-active');
};

function initEvents() {
  burgerTrigger.addEventListener('click', handleBurgerTriggerClick);
  userinfoTrigger.addEventListener('click', handleUserinfoTriggerClick);
  userInfoClose.addEventListener('click', handleUserinfoCloseClick);
}

module.exports = { initEvents };

