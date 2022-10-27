//swiper----------------------------------------
const swiper = new Swiper('.swiper', {
  // slidesPerView: 2, //表示する数
  spaceBetween: 24, //隣り合わせのマージン
  width: 274,
  loop: true,
  loopedSlides: 6,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    //768px以上の場合
    768: {
      // slidesPerView: 3,
      spaceBetween: 40,
      width: 400,
    }
  }
});
//swiper-end-------------------------------


//wow.js
new WOW().init();


//jQuery
jQuery('.drawerIcon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawerIcon').toggleClass('is-active');
  jQuery('.drawerContent').toggleClass('is-active');
  jQuery('.drawerBackground').toggleClass('is-active');

  return false;
});