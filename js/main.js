$(document).ready(function () {
    const factsSlider = $('.facts-slider  .slider-cont')
    const valuesSlider = $('.our-values  .slider-cont')
    const sectorsSlider = $('.sectors  .slider-cont')
    const menuToggleBtn = $('.toggle-menu')
    const menuCloseBtn = $('.close-menu')

    if (factsSlider.length) {
        factsSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

    }
    if (valuesSlider.length) {
        valuesSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

    }
    if (sectorsSlider.length) {
        sectorsSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

    }

    menuToggleBtn.on('click', function () {
        $('body').addClass('menu-opened')
    })

    menuCloseBtn.on('click', function () {
        $('body').removeClass('menu-opened')
    })


    new SimpleBar($('.years .slider-row')[0], { autoHide: false, direction: 'horizontal' });

    function calcContainerWidth() {
        const containerWidth = $('.container.scroll-before').innerWidth();

        $('.simplebar-track').css('width', containerWidth)


        console.log("ASd", containerWidth)

    }

    calcContainerWidth()

    $(window).on('resize', function () {
        calcContainerWidth()
    })



})