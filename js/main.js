// const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
// const hamburgerMenuCloseBtn = document.getElementById(
//   'hamburger-menu-close-btn'
// );
// const mainContainer = document.querySelector('.main-container');

// hamburgerMenuBtn.addEventListener('click', () =>
//   mainContainer.classList.add('hamburger-menu-activated')
// );
// hamburgerMenuCloseBtn.addEventListener('click', () =>
//   mainContainer.classList.remove('hamburger-menu-activated')
// );

const sectionStart = document.getElementById('start');
const sectionOffer = document.getElementById('offer');
const sectionPrices = document.getElementById('prices');

const allSections = document.querySelectorAll('.section-item');

const mainNavItemStart = document.querySelector('#main-nav-item-start');
const mainNavItemOffer = document.querySelector('#main-nav-item-offer');
const mainNavItemPrices = document.querySelector('#main-nav-item-prices');

function hideSection(elements) {
  elements = elements.length ? elements : [elements];
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}

function showSection(elements) {
  elements = elements.length ? elements : [elements];
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.display = '';
  }
}

mainNavItemStart.addEventListener('click', function () {
  hideSection(allSections);
  sectionStart.style.display = '';
});

mainNavItemOffer.addEventListener('click', function () {
  hideSection(allSections);
  sectionOffer.style.display = '';
});

mainNavItemPrices.addEventListener('click', function () {
  hideSection(allSections);
  sectionPrices.style.display = '';
});

// const myAudioPlayer = document.getElementById('my-audio-background');
// myAudioPlayer.volume = 0.3;
