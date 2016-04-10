//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };


    setTimeout(function() {
        $('input[type="checkbox"],input[type="radio"],select').styler();

    }, 100);

    $(".form-cast-two label").bind('click',function(){
        $(this).toggleClass('active');
    });
    $('.clok').bind('click',function(){
        $('.delivery').slideUp(700);
    });

    $('.hamburger').bind('click',function () {
        $(this).toggleClass("is-active").nextAll('ul').slideToggle();
    });
    $('.butt-sort').bind('click',function () {
        $('.article-box').slideToggle();
    });

    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 235,
        slideMargin: 0,
        pagerType: "short",
        nextText:"<i class='next'></i>",
        prevText:"<i class='prev'></i>"
    })

});

$(function(){
    $('.loader-box,.loader').fadeIn(10); //показывает фон и индикатор
    $(window).load(function() {
        $('.loader-box,.loader').fadeOut(1000); //скрывает, после загрузки страницы
    });
});