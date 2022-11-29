$(function () {

    //topBanner 
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    })


    //mainSlide
    $('.mainSlide').slick({
        // slidesToShow: 2,
        // arrows:false,
        dots: true,
        autoplay: true,
        trueauopSpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });






})  