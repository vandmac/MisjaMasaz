const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
const hamburgerMenuCloseBtn = document.getElementById(
  'hamburger-menu-close-btn'
);
const mainContainer = document.querySelector('.main-container');

hamburgerMenuBtn.addEventListener('click', () =>
  mainContainer.classList.add('hamburger-menu-activated')
);
hamburgerMenuCloseBtn.addEventListener('click', () =>
  mainContainer.classList.remove('hamburger-menu-activated')
);

const mainNavItemStart = document.querySelector('main-nav-item-start');
const mainNavItemOffer = document.querySelector('main-nav-item-offer');

const sectionStart = document.querySelector('section-start');
const sectionServices = document.querySelector('section-services');

mainNavItemStart.addEventListener('click', () => {
  sectionStart.classList.remove('hide');
  sectionStart.classList.add('show');

  sectionServices.classList.add('hide');
});

// const myAudioPlayer = document.getElementById('my-audio-background');
// myAudioPlayer.volume = 0.3;
