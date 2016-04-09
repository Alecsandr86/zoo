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
        $('.delivery').slideUp(1000);
    });

    $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides: 5,
        slideWidth: 239,
        pagerType: "short",
        nextText:"<i class='next'></i>",
        prevText:"<i class='prev'></i>"
    })

});