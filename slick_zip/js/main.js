
$('.mainSlider').on('init afterChange', function (event, slick, currentSlide) {
    var current = $('.mainSlider .slick-current');
    current.addClass('on').siblings().removeClass('on')
})

$('.mainSlider').slick({
    dots: true,
})

$('.productSlider').on('init afterChange', function (event, slick, currentSlide) {
    var current = $('.productSlider .slick-current');
    current.addClass('on').siblings().removeClass('on')
})

$('.productSlider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 5,
})

$('.leftSlider').slick({
    asNavFor: '.rightSlider, .slogan',
    dots: true,
    autoplay: true,
    fade: true,
})

$('.rightSlider').slick({
    asNavFor: '.leftSlider, .slogan',
    slidesToShow: 3,
    focusOnSelect: true,
})

$('.slogan').slick({
    asNavFor: '.leftSlider',
    vertical: true,
})

