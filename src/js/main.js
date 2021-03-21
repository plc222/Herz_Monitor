$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><img src = "img/slider/chevron-right-solid.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src = "img/slider/chevron-left-solid.svg"></button>'
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
   
});

//Текст по клику на кнопку "Подробнее"

const btnAdd = document.querySelectorAll('.catalog-item__link');// Кнопка подробнее
const btnPrev = document.querySelectorAll('.catalog-item__back');// Кнопка "НАЗАД"
const modal = document.querySelector('.catalog-item__list');// Сам текст


btnAdd.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-next');
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-item__list-visible');
  })
});

btnPrev.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-prev');
    document.querySelector(`[data-target="${path}"]`).classList.remove('catalog-item__list-visible');
  })
});

/* Модальные окна*/

$('[.data-modal = consultation]').on('click', function(){
  $('.overlay, #consultation').fadeIn('slow');
});



















  