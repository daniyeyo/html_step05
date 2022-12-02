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


    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_num').text(c + 1)
    })

    // c는 0

    $('.main_dots li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })






    // $('.row').slick({
    //     slidesToShow: 3,
    // })



    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
    })

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })

    // tab menu

    $('mainCustomer .tab_menu').on('click', function (event) {
        event.preventDefault();
        var _this = $(this); //이벤트가 적용된 사진을 변환
        var idx = $(this).index(); //이벤트가 적용된 자신의 번호를 변환 0,1,2
        $(this).addClass('on').siblings().removeCalss('on');
        $('.mainCustomer .tab_content>li').eq(idx).addClass('on')
            .siblings().removeClass('on');
    })


    // 아래는 선택창에서 사이트 바로 가는 js
    $('#f_link').on('change', function () {
        console.log('change', $(this).val());
        var link = $(this).val();
        link && window.open(link);
    })









})