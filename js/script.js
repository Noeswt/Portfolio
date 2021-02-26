$(function() { 
    $(".p-header__right__burger-btn").on("click", function() {
        $(".p-header__right__nav").toggleClass("menu-open");
        $(".p-header__right__burger-btn").toggleClass("menu-open");
        $(".p-header__right__burger-btn__bar").toggleClass("menu-open");
    });

    $(window).on("scroll", function () {
        const sliderHeight = $(".p-fv").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
          $(".p-header__left__a__title").addClass("color");
          $(".p-header__right__burger-btn__bar").addClass("color");
        } else {
          $(".p-header__left__a__title").removeClass("color");
          $(".p-header__right__burger-btn__bar").removeClass("color");
        }
      });

    //ページ内リンクスムーススクロール
    $('a[href^="#"]').on('click', function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop: position}, 550, "swing");
        return false;
    });

    $('a[href^="#"]').on('click', function() {
        $('.p-header__right__nav').removeClass("menu-open");
        $('.p-header__right__burger-btn').removeClass("menu-open");
        $('.p-header__right__burger-btn__bar').removeClass("menu-open");
  
        return false; //a要素のリンク先移動防ぐ
    });
});
