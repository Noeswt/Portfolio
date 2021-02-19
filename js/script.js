$(function() { 
    $(".p-header__right__burger-btn").on("click", function() {
        $(".p-header__right__nav").toggleClass("menu-open");
        $(".p-header__right__burger-btn").toggleClass("menu-open");
        $(".p-header__right__burger-btn__bar").toggleClass("menu-open");
    });
});