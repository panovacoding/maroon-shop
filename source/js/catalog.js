
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
        nextEl: '.slider-btn-n',
        prevEl: '.slider-btn-p',
    },
});

const recentSwiper = new Swiper ('.recent-swiper', {
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
        nextEl: '.recent-slider-btn-n',
        prevEl: '.recent-slider-btn-p',
    }
})