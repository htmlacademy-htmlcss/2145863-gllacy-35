
let itemCart = document.querySelector('.item--cart');
let buttonCart = document.querySelector('.item--cart a');
let emptyCart = document.querySelector('.cart--empty');
let fullCart = document.querySelector('.cart--full');
let itemLogin = document.querySelector('.item--login');
let buttonLogin = document.querySelector('.item--login a');
let itemSearch = document.querySelector('.item--search');
let buttonSearch = document.querySelector('.item--search button');
let itemCatalog = document.querySelector('.item--catalog');
let buttonCatalog = document.querySelector('.item--catalog a');


let buttonOpenFeedback = document.querySelector('.button--open-feedback');
let modalContaniner = document.querySelector('.modal-container');
let buttonCloseFeedback = document.querySelector('.modal-close-button');

let buttonSliderNext = document.querySelector('.button-slider--next');
let buttonSliderPrev = document.querySelector('.button-slider--prev');
let body = document.querySelector('body');

let currrentSlide = 1;

// Переключение менюшек
buttonCart.addEventListener('click', function() {
  itemCart.classList.toggle('active');
    if (itemCart.classList.contains('active')) {
      emptyCart.classList.toggle('hide');
      fullCart.classList.toggle('hide');
   }
});

buttonLogin.addEventListener('click', function() {
  itemLogin.classList.toggle('active');
});

buttonSearch.addEventListener('click', function() {
  itemSearch.classList.toggle('active');
});

buttonCatalog.addEventListener('click', function() {
  itemCatalog.classList.toggle('active');
});

// Закрытие модального окна обратной связи
buttonCloseFeedback.addEventListener('click', function() {
  modalContaniner.classList.toggle('active');
});

buttonOpenFeedback.addEventListener('click', function() {
  modalContaniner.classList.toggle('active');
});

buttonSliderNext.addEventListener('click', function() {
  currrentSlide++;
  currrentSlide = (currrentSlide > 3) ? 1 : currrentSlide;
  setSlide(currrentSlide);
});

buttonSliderPrev.addEventListener('click', function() {
  currrentSlide--;
  currrentSlide = (currrentSlide < 1) ? 3 : currrentSlide;
  setSlide(currrentSlide);
});

function setSlide(slideNumber) {
    const className = 'body--color-' + slideNumber;
    body.removeAttribute("class");
    body.classList.add(className);
    let slides = document.querySelectorAll('.slide');
    slides.forEach(element => {
      element.classList.remove('show');
    });
    document.querySelector('.slide-'+slideNumber).classList.add('show');
}
