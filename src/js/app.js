// swiper
$(document).ready(function () {
    var myTopSwiper = new Swiper('.top-swiper', {
        pagination: {
            el: '.swiper-pagination',
        },
        loop : true,
    })
    var myBottomSwiper = new Swiper('.bottom-swiper',{
        pagination: {
            el: '.swiper-pagination',
        },
        loop : true,
        autoplay:true,
    })
})