const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//wow.js
new WOW().init();


jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault(); //デフォルトで設定しているブラウザのイベントを防止する

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false; //親要素へのイベント伝播を止める。しかしjavaScriptでは逆のイベント伝播を止めないになる。
});

jQuery('a[href^="#"]').on('click', function() {

  let header = jQuery('.header').innerHeight();
  let id = jQuery(this).attr('href');
  let position = 0;
  
  if (id != '#') {
    position = jQuery(id).offset().top - header;
  }

  jQuery('html,body').animate({
    scrollTop: position
  },300);

});

jQuery(window).on('scroll', function() {

  if (100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
  
});

jQuery('.header__nav li a').on('click', function() {

  jQuery('.header__nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');

});

jQuery('.qa-box__q').on('click', function() {
  jQuery(this).next().slideToggle();//兄弟要素の次の要素という意味
  jQuery(this).children('.qa-box__icon').toggleClass('is-open');
});


//モーダル
jQuery('.js-close-button').on('click', function(e) {
  e.preventDefault();//aタグの本来の動きを無効化する

  let target = jQuery(this).data('target');
  jQuery('.' + target).hide();
});

jQuery('.js-open-button').on('click', function(e) {
  e.preventDefault();//aタグの本来の動きを無効化する

  let target = jQuery(this).data('target');
  jQuery('.' + target).show();
});