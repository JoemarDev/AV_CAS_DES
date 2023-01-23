$(document).ready(() => {
    InitCarousel();
});

const OpenLoginForm = () => $('.LOGIN_WRAPPER').show();

const CloseLoginForm = () => $('.LOGIN_WRAPPER').hide();



const InitCarousel = () => {
    // const DEF_WID = $('.header-wrapper').width();
    // $('.owl-carousel').width(DEF_WID)
    $('.owl-carousel').owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
    })
}



$('.brand-container').click(() => {
    window.location = "index.html";
})