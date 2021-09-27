const swiper = new Swiper(".arsenal__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1160: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
});