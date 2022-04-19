const sectionStart = document.getElementById('start');
const sectionOffer = document.getElementById('offer');
const sectionPrices = document.getElementById('prices');
const sectionGallery = document.getElementById('gallery');
const sectionContact = document.getElementById('contact');

const allSections = document.querySelectorAll('.section-item');

const mainNavItemStart = document.querySelector('#main-nav-item-start');
const mainNavItemOffer = document.querySelector('#main-nav-item-offer');
const mainNavItemPrices = document.querySelector('#main-nav-item-prices');
const mainNavItemGallery = document.querySelector('#main-nav-item-gallery');
const mainNavItemContact = document.querySelector('#main-nav-item-contact');

const mainNavItemBurgerStart = document.querySelector(
  '#main-nav-item-burger-start'
);
const mainNavItemBurgerOffer = document.querySelector(
  '#main-nav-item-burger-offer'
);
const mainNavItemBurgerPrices = document.querySelector(
  '#main-nav-item-burger-prices'
);
const mainNavItemBurgerGallery = document.querySelector(
  '#main-nav-item-burger-gallery'
);
const mainNavItemBurgerContact = document.querySelector(
  '#main-nav-item-burger-contact'
);

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

mainNavItemGallery.addEventListener('click', function () {
  hideSection(allSections);
  sectionGallery.style.display = '';
});

mainNavItemContact.addEventListener('click', function () {
  hideSection(allSections);
  sectionContact.style.display = '';
});

mainNavItemBurgerStart.addEventListener('click', function () {
  hideSection(allSections);
  sectionStart.style.display = '';
});

mainNavItemBurgerOffer.addEventListener('click', function () {
  hideSection(allSections);
  sectionOffer.style.display = '';
});

mainNavItemBurgerPrices.addEventListener('click', function () {
  hideSection(allSections);
  sectionPrices.style.display = '';
});

mainNavItemBurgerGallery.addEventListener('click', function () {
  hideSection(allSections);
  sectionGallery.style.display = '';
});

mainNavItemBurgerContact.addEventListener('click', function () {
  hideSection(allSections);
  sectionContact.style.display = '';
});

// initialize section start
hideSection(allSections);
sectionStart.style.display = '';