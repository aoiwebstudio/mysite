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




//jQuery
jQuery(function () {
  
  //wow.js
  new WOW().init();

  //スムーススクロール
  jQuery('a[href^="#"]').click(function() {
    
    let speed = 600;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    
    jQuery("html,body").animate(
      {
        scrollTop: position - jQuery('#js-header').outerHeight()
      },
      speed
    );
      
    return false;  
  });

  //google-form
  let $form = $('#js-form') //formタグに指定したID
  $form.submit(function(e) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function() {
          //送信に成功したときの処理
          $form.slideUp();
          $('#js-success').slideDown();
        },
        200: function() {
          //送信に失敗したときの処理
          $form.slideUp();
          $('#js-error').slideDown();
        }
      }
    });
    return false;  
  });

  //drawer
  jQuery('.drawerIcon').on('click', function (e) {
    e.preventDefault();

    jQuery('.drawerIcon').toggleClass('is-active');
    jQuery('.drawerContent').toggleClass('is-active');
    jQuery('.drawerBackground').toggleClass('is-active');

    return false;
  });

  //formの入力確認
  let $submit = $('#js-submit');
  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[type="tel"]').val() !== "" &&
      $('#js-form textarea').val() !== "" &&
      $('#js-form input[name="entry.1929294793"]').prop('checked') === true,
      $('#js-form input[type="checkbox"]').prop('checked') === true
    ) {
      // すべて入力されたとき
      $submit.prop('disabled', false);
      $submit.addClass('-active');
    } else {
      // 入力されていないとき
      $submit.prop('disabled', true);
      $submit.removeClass('-active');
    }
  });

});//jQuery-end