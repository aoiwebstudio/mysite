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


//jQuery
jQuery('.drawerIcon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawerIcon').toggleClass('is-active');
  jQuery('.drawerContent').toggleClass('is-active');
  jQuery('.drawerBackground').toggleClass('is-active');

  return false;
});