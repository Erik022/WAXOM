$(document).ready(() => {
    const header = $('.header');
    const mobileNavigation =  $('.mobile__nav__container');

    const addClassToHeader = () => {
        if ((window.pageYOffset > header.height())) {
            $('.header__block').addClass('position__fixed', 10000,);
        } else {
            $('.header__block').removeClass('position__fixed');
        }
    }

    $(document).on('scroll', addClassToHeader)

    addClassToHeader();

    $('nav').find('a').click((event) => {
        event.preventDefault();
        const $href = event.target.hash || '#home';
        const $anchor = $($href).offset();
        $('html,body').animate({
            scrollTop: $anchor.top - 75
        }, 800);
        return false;
    });

    $('#mobile_close').on('click',() => {
       mobileNavigation.css('display', 'none');
    })

    $('.burger__menu').on('click',() => {
        mobileNavigation.css('display', 'block');
    })
});
