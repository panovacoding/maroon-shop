
const newSwiper = new Swiper(".big-slider", {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<hr style="width:50px; display: inline-block">' +
                    '<span class="' + totalClass + '"></span>';
        },
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});